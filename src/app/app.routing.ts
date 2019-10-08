import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckinLogsComponent } from './pages/checkin-logs/checkin-logs.component';
import { NewCheckinComponent } from './pages/new-checkin/new-checkin.component';

const routes: Routes = [
  {
    path: 'checkin-logs',
    component: CheckinLogsComponent,
  },
  {
    path: 'new-checkin',
    component: NewCheckinComponent,
  },
  {
    path: '**',
    redirectTo: '/checkin-logs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
