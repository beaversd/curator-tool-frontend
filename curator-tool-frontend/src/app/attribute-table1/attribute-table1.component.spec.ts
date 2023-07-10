import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeTable1Component } from './attribute-table1.component';

describe('AttributeTable1Component', () => {
  let component: AttributeTable1Component;
  let fixture: ComponentFixture<AttributeTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeTable1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
