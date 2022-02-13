import { Security } from './security';

export interface GetSecuritiesResult {
  securities: Security[];
  totalHits: number;
}
