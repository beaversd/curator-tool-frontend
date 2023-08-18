import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AttributeTableRoutingModule } from './attribute-table-routing.module';
import { AttributeTableComponent } from './pages/attributeTable/attribute-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { AttributeTableEffects } from './state/attribute-table.effects';
import { attributeTableReducer } from './state/attribute-table.reducers';
import { MaterialModule } from '../material/material.module';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [
    AttributeTableComponent,
    MainViewComponent
  ],
  imports: [
    CommonModule,
    AttributeTableRoutingModule,
    RouterModule,
    EffectsModule.forFeature(AttributeTableEffects),
    StoreModule.forFeature('attributeDataState', attributeTableReducer),
    SharedModule,


  ]
})
export class AttributeTableModule { }
