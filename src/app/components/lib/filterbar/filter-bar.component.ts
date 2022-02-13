import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { ChipsComponent } from '../chips/chips.component';

@Component({
  selector: 'qp-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent<T> implements AfterContentInit{

  @Input() filterSelection: T;
  @Output() filterSelectionChange = new EventEmitter<T>();

  @ContentChildren(ChipsComponent) templates: QueryList<ChipsComponent<T>>;

  ngAfterContentInit() {
    this.templates.forEach((template) => {
      template.filterSelectionChange.subscribe((e) => {
        this.filterSelectionChange.emit(e);
      });
    });
  }

  constructor() { }

}
