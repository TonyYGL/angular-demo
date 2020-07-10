import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DragDropComponent }  from './drag-drop/drag-drop.component';
import { AddressFormComponent } from "./address-form/address-form.component";
import { MaterialTableComponent } from "./material-table/material-table.component";
import { MaterialDashboardComponent } from "./material-dashboard/material-dashboard.component";
import { MaterialTreeComponent } from "./material-tree/material-tree.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dragdrop', component: DragDropComponent },
  { path: 'form', component: AddressFormComponent },
  { path: 'table', component: MaterialTableComponent },
  { path: 'material-dashboard', component: MaterialDashboardComponent },
  { path: 'material-tree', component: MaterialTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
