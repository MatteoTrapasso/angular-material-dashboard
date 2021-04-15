import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Altezza', weight: '190', symbol: 'cm' },
  { position: 2, name: 'Peso', weight: '97', symbol: 'Kg' },
  { position: 3, name: 'Età', weight: '23', symbol: 'anni' },
  { position: 4, name: 'BMI', weight: '25', symbol: '%' },
  { position: 5, name: 'Range', weight: 'sovrappeso', symbol: '' },
  { position: 6, name: 'Target', weight: '-10', symbol: 'Kg' },

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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
