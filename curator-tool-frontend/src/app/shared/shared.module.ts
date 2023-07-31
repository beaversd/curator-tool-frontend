import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SchemaPanelComponent } from './layout/schema-panel/schema-panel.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,

  ],
  declarations: [SchemaPanelComponent],
  exports: [SchemaPanelComponent, MaterialModule]
})
export class SharedModule { }
