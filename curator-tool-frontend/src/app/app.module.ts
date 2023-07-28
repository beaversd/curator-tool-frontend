import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // importing the http module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeTableComponent } from './attribute-table/pages/attributeTable/attribute-table.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttributeTableModule } from './attribute-table/attribute-table.module';
import { EntitiesTableModule } from './entities-table/entities-table.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.dev';
import { EffectsModule } from '@ngrx/effects';
import { TablePracticeComponent } from './table-practice/table-practice.component';


@NgModule({
  declarations: [
    AppComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AttributeTableComponent,
    HttpClientModule,
    AttributeTableModule,
    EntitiesTableModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
