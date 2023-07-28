import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePracticeComponent } from './table-practice.component';

describe('TablePracticeComponent', () => {
  let component: TablePracticeComponent;
  let fixture: ComponentFixture<TablePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePracticeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TablePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
