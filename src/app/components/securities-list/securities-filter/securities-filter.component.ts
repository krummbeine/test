import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SecuritiesFilter } from '../../../models/securitiesFilter';
import { HelperService } from '../../../helpers/helper.service';
import { BooleanIconListProps } from '../../../models/boolleanList';
import { IconListEntry } from '../../../models/iconListEntry';

@Component({
  selector: 'qp-securities-filter',
  templateUrl: './securities-filter.component.html',
  styleUrls: ['./securities-filter.component.scss']
})
export class SecuritiesFilterComponent {

  @Input() securityFilter: SecuritiesFilter;
  @Input() currencies: IconListEntry<string>[];
  @Input() types: IconListEntry<string>[];
  @Input() set values(value: SecuritiesFilter) { this.securityFilter = value || {}; }
  @Output() valuesChange = new EventEmitter<SecuritiesFilter>();

  booleanIconListProps = BooleanIconListProps;

  constructor(private helperService: HelperService) { }

  emitChangeEvent(event?: SecuritiesFilter): void {
    const validValues = this.helperService.removeKeysWithoutInformationFromObject<SecuritiesFilter>(
      event || this.securityFilter
    );

    this.securityFilter = validValues;
    this.valuesChange.emit(validValues);
  }

}
