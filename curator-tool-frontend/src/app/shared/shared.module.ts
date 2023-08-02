import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SchemaPanelComponent } from './layout/schema-panel/schema-panel.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [MaterialModule, SchemaPanelComponent]
})
export class SharedModule { }
