import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // importing the http module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeTableComponent } from './attribute-table/attribute-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttributeTable1Component } from './attribute-table1/attribute-table1.component';
import { TableSwitchComponent } from './table-switch/table-switch.component';
import { TablePracticeComponent } from './table-practice/table-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSwitchComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AttributeTableComponent,
    AttributeTable1Component,
    HttpClientModule,
    TablePracticeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
