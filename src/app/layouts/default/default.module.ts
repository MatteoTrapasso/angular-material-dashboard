import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from 'src/app/main/views/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from 'src/app/main/views/posts/posts.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardService} from 'src/app/main/services/dashboard.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule {
}
