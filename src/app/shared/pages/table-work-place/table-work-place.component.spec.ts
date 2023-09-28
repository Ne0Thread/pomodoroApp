import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkPlaceComponent } from './table-work-place.component';

describe('TableWorkPlaceComponent', () => {
  let component: TableWorkPlaceComponent;
  let fixture: ComponentFixture<TableWorkPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWorkPlaceComponent]
    });
    fixture = TestBed.createComponent(TableWorkPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
