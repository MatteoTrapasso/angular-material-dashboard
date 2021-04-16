import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  value: string;
  unit: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Altezza', value: '190', unit: 'cm' },
  { position: 2, name: 'Peso', value: '97', unit: 'Kg' },
  { position: 3, name: 'Età', value: '23', unit: 'anni' },
  { position: 4, name: 'BMI', value: '25', unit: '%' },
  { position: 5, name: 'Range', value: 'sovrappeso', unit: '' },
  { position: 6, name: 'Target', value: '-10', unit: 'Kg' },

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['name', 'value', 'unit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
