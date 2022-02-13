import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qp-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent {

  @Output() valueChange = new EventEmitter<string>();

  @Input() set value(value: string) {
    this.inputValue = value;
  }

  @Input() label: string = '';

  private _value: string = '';

  set inputValue(value) {
    if (value !== this._value) {
      this._value = value;
      this.valueChange.emit(this._value);
    }
  }

  get inputValue(): string {
    return this._value;
  }

  constructor() { }
}
