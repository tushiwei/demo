import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/customerdata', pathMatch: 'full' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then( m => m.CustomersModule)},
  { path: 'customerdata', loadChildren: () => import('./customer-data/customer-data.module').then( m => m.CustomerDataModule)},
  { path: 'weather', loadChildren: () => import('./weathers/weathers.module').then( m => m.WeathersModule)},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
