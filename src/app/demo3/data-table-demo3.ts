import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from '../data-table';
import { films } from './data-table-demo3-data';


@Component({
  selector: 'data-table-demo-3',
  templateUrl: './data-table-demo3.html',
  styleUrls: ['./data-table-demo3.css']
})
export class DataTableDemo3 {

    filmResource = new DataTableResource(films);
    films = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}
