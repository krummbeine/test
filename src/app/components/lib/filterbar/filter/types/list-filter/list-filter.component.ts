import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelperService } from '../../../../../../helpers/helper.service';
import { FormControl } from '@angular/forms';
import { IconListEntry } from '../../../../../../models/iconListEntry';

@Component({
  selector: 'qp-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent<T, E> {

  @Output() selectedChange = new EventEmitter<E>();

  @Input() set selected(selected: E) {
    this._selected = selected;
  }

  @Input() multiselect: boolean = false;
  @Input() label: string = '';
  @Input() listEntries: IconListEntry<T>[];

  private _selected: E;

  public formControl = new FormControl();

  set selectedValues(selected: E) {
    if (!this.helperService.simpleArraysEqual(this._selected, selected)) {
      this._selected = selected;
      this.selectedChange.emit(this._selected);
    }
  }

  get selectedValues(): E {
    return this._selected;
  }

  constructor(private helperService: HelperService) { }
}
