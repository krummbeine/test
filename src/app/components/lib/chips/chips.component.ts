import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KeyValue } from '../../../models/keyValue';

@Component({
  selector: 'qp-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent<T extends Object> {

  @Output() filterSelectionChange = new EventEmitter<T>();

  @Input() hideFilters: string[] = [];

  @Input() set filterSelection(filter: T) {
    if (!filter) { this._keyValues = []; return; }

    this._filterSelection = filter;
    this._keyValues = Object.keys(filter)
      .filter(key => !this.hideFilters || this.hideFilters.indexOf(key) === -1)
      .map((key) => {

      if (Array.isArray(filter[key])) {
        return {
          key: key,
          value: filter[key]
        };
      }

      return {
        key: key,
        value: filter[key]?.toString() || ''
      }

    });
  };

  private _keyValues: KeyValue<string, string>[];
  private _filterSelection: T;

  get chips(): KeyValue<string, string>[] {
    return this._keyValues;
  }

  constructor() { }

  removeChip(key: string) {
    delete this._filterSelection[key];
    this._keyValues = this._keyValues.filter(kv => kv.key !== key);
    this.filterSelectionChange.emit(this._filterSelection);
  }

  isArray(element: any): boolean {
    return element && Array.isArray(element);
  }
}
