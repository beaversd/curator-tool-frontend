import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule, 
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatToolbarModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule, 
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatToolbarModule
  ]
})
export class MaterialModule { }
