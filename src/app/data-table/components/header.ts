import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from './table';


@Component({
  selector: 'data-table-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {

    columnSelectorOpen = false;

    _closeSelector() {
        this.columnSelectorOpen = false;
    }

    constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}
}
