import {PagingFilter} from './pagingFilter';

export interface SecuritiesFilter extends PagingFilter {
  name?: string;
  types?: string[];
  currencies?: string[];
  isPrivate?: boolean;
}
