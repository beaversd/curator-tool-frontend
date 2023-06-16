import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AttributeTableComponent } from './pages/attributeTable/attribute-table.component';
import { EntriesTableComponent } from './pages/entries-table/entries-table.component';

const routes: Routes = [
  {
    path: "",
    component: AttributeTableComponent
  },
  {
    path: "entriesTable",
    component: EntriesTableComponent
  }
]

@NgModule({
  declarations: [AttributeTableComponent, EntriesTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AttributeTableRoutingModule { }