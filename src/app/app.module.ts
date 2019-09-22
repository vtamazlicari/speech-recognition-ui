import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {AppService} from './shared/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    MatSidenavModule,
    MDBBootstrapModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
