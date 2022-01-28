import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';


import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './Components/navbar/header.component';
import { ArmsdashboardComponent } from './Pages/armsdashboard/armsdashboard.component';
import { MenubarComponent } from './Components/menubar/menubar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomertabComponent } from './Pages/customertab/customertab.component';
import { FilterComponent } from './Pages/filter/filter.component';
import { AcnatabComponent } from './Pages/acnatab/acnatab.component';
import { AecntabComponent } from './Pages/aecntab/aecntab.component';
import { OcntabComponent } from './Pages/ocntab/ocntab.component';
import { CtctabComponent } from './Pages/ctctab/ctctab.component';
import { BilltabComponent } from './Pages/billtab/billtab.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArmsdashboardComponent,
    MenubarComponent,
    CustomertabComponent,
    FilterComponent,
    AcnatabComponent,
    AecntabComponent,
    OcntabComponent,
    CtctabComponent,
    BilltabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
