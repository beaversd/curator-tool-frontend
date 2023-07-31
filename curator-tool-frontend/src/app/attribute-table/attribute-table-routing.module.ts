import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AttributeTableComponent } from './pages/attributeTable/attribute-table.component';

const routes: Routes = [
  {
    path: `attribute/:className`,
    component: AttributeTableComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AttributeTableComponent
  ],
  exports: [RouterModule],
  // providers: [
  //   provideRouter(routes, withComponentInputBinding()),
  // ]


})
export class AttributeTableRoutingModule { }
// function withComponentInputBinding(): import("@angular/router").RouterFeatures {
//   throw new Error('Function not implemented.');
// }

