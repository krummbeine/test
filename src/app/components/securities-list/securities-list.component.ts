import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { indicate } from '../../utils';
import { SecurityService } from '../../services/security.service';
import { SecuritiesFilter } from '../../models/securitiesFilter';
import { IconListEntry } from '../../models/iconListEntry';
import { PagingFilter } from '../../models/pagingFilter';
import { GetSecuritiesResult } from '../../models/getSecuritiesResult';

@Component({
  selector: 'securities-list',
  templateUrl: './securities-list.component.html',
  styleUrls: [ './securities-list.component.scss' ]
})
export class SecuritiesListComponent implements OnInit {

  public displayedColumns: string[] = [ 'name', 'type', 'currency' ];
  public securityFilter: SecuritiesFilter;
  public securitiesResult$: Observable<GetSecuritiesResult>;
  public currencies$: Observable<IconListEntry<string>[]>;
  public types$: Observable<IconListEntry<string>[]>;
  public loadingSecurities$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _securityService: SecurityService) { }

  ngOnInit(): void {
    const initialSkip = 0;
    const initialLimit = 5;

    this._initializeSecurityFilter(initialSkip, initialLimit);
    this._getSecurities({ skip: initialSkip, limit: initialLimit });

    this.currencies$ = this._securityService.getCurrencyValues();
    this.types$ = this._securityService.getTypeValues();
  }

  private _initializeSecurityFilter(initialSkip: number, initialLimit: number) {
    this.securityFilter = {
      name: '',
      types: [],
      currencies: [],
      isPrivate: undefined,
      skip: initialSkip,
      limit: initialLimit
    };
  }

  onFilterChange(securityFilter: SecuritiesFilter) {
    this._getSecurities({ ...securityFilter, skip: 0 });
  }

  onPagingChange(paginationFilter: PagingFilter) {
    this._getSecurities({ ...this.securityFilter, ...paginationFilter });
  }

  private _getSecurities(securityFilter: SecuritiesFilter = {}): void {
    this.securityFilter = Object.assign({}, securityFilter);

    this.securitiesResult$ = this._securityService.getSecurities(securityFilter)
      .pipe(indicate(this.loadingSecurities$));
  }
}
