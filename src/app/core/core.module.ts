import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {ComponentsModule} from '../modules/components.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule
  ],
  providers: []
})
export class CoreModule { }
