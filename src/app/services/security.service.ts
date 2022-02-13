import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { Security } from "../models/security";
import { SecuritiesFilter } from "../models/securitiesFilter";
import { SECURITIES } from "../../assets/mocks/securities/securities-mock";
import { CURRENCIES } from '../../assets/mocks/currencies/currencies-mock';
import { TYPES } from '../../assets/mocks/types/types-mock';
import { IconListEntry } from '../models/iconListEntry';
import { GetSecuritiesResult } from '../models/getSecuritiesResult';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  /**
   * Get Securities server request mock
   * */
  getSecurities(securityFilter?: SecuritiesFilter): Observable<GetSecuritiesResult> {
    const end = securityFilter?.skip >= 0 && securityFilter?.limit >= 0 ? securityFilter.skip + securityFilter.limit : 100;

    const filteredSecurities = this.filterSecurities(securityFilter);
    const pagedSecurities = filteredSecurities.slice(securityFilter?.skip ?? 0, end);

    return of({
      securities: pagedSecurities,
      totalHits: filteredSecurities.length
    }).pipe(delay(1000));
  }

  /**
   * Get Currencies server request mock
   * */
  getCurrencyValues(): Observable<IconListEntry<string>[]> {
    return of(CURRENCIES).pipe(delay(1000));
  }

  /**
   * Get types server request mock
   * */
  getTypeValues(): Observable<IconListEntry<string>[]> {
    return of(TYPES).pipe(delay(1000));
  }

  private filterSecurities(securityFilter: SecuritiesFilter) {
    if (!securityFilter) return SECURITIES;

    return SECURITIES.filter(s =>
      (!securityFilter.name || (s.name && s.name.toLowerCase().includes(securityFilter.name.toLowerCase())))
      && (!securityFilter.types || securityFilter.types.some(type => s.type === type))
      && (!securityFilter.currencies || securityFilter.currencies.some(currency => s.currency == currency))
      && (securityFilter.isPrivate === undefined || securityFilter.isPrivate === s.isPrivate)
    );
  }
}
