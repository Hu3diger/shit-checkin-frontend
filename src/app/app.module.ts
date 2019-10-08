import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckinLogsComponent } from './pages/checkin-logs/checkin-logs.component';
import { NewCheckinComponent } from './pages/new-checkin/new-checkin.component';
import { DotMenuComponent } from './components/dot-menu/dot-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DotMenuComponent,
    NewCheckinComponent,
    CheckinLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
