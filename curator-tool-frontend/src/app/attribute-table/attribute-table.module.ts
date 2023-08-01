import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeTableRoutingModule } from './attribute-table-routing.module';
import { AttributeTableComponent } from './pages/attributeTable/attribute-table.component';
import { AttributeTableEffects } from './state/attribute-table.effects';
import { StoreModule } from '@ngrx/store';
import { attributeTableReducer } from './state/attribute-table.reducers';
import { EffectsModule } from '@ngrx/effects';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AttributeTableRoutingModule,
    AttributeTableComponent,
    EffectsModule.forFeature(AttributeTableEffects),
    StoreModule.forFeature('attributeDataState', attributeTableReducer),
    SharedModule
  ]
})
export class AttributeTableModule { }
