import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaPanelComponent } from './layout/schema-panel/schema-panel.component';
import { PipeNameComponent } from './pipes/pipe-name/pipe-name.component';
import { MaterialModule } from '../material/material.module';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SchemaPanelComponent,
    PipeNameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [MaterialModule, SchemaPanelComponent]
})
export class SharedModule { }
