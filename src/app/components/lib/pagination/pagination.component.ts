import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SecuritiesFilter } from '../../../models/securitiesFilter';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'qp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() paginationChange = new EventEmitter<SecuritiesFilter>();

  @Input() set paging(value: SecuritiesFilter) { this.pagingFilter = value || {}; }

  @Input() totalHits: number = 0;

  public pagingFilter: SecuritiesFilter = {
    skip: 0,
    limit: 5
  };

  constructor() { }

  onPaginationChange(event: PageEvent): void {
    this.paginationChange.emit( {
      skip: event.pageIndex * event.pageSize,
      limit: event.pageSize
    });
  }
}
