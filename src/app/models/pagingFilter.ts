export interface PagingFilter {
  /** Skip Option: Sets an offset that omits a specified number of rows before beginning of the result.
   * For instance: skip = (selectedPage - 1) * pageSize;
   */
  skip?: number;

  /** Limit Option: Limits the number of rows returned from a query. */
  limit?: number;
}
