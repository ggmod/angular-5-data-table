import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { cars } from './data-table-demo2-data';


@Component({
  selector: 'data-table-demo-2',
  templateUrl: './data-table-demo2.html'
})
export class DataTableDemo2 {

    carResource = new DataTableResource(cars);
    cars = [];
    carCount = 0;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor() {
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    // custom features:

    carClicked(car) {
        alert(car.model);
    }

    yearLimit = 1999;

    rowColors(car) {
        if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
    }
}
