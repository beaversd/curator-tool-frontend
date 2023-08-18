import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AttributeTableComponent } from './pages/attributeTable/attribute-table.component';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  {
    path: `attribute/:className`,
    component: MainViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],



})
export class AttributeTableRoutingModule { }


