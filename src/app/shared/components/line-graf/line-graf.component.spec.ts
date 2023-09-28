import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGrafComponent } from './line-graf.component';

describe('LineGrafComponent', () => {
  let component: LineGrafComponent;
  let fixture: ComponentFixture<LineGrafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineGrafComponent]
    });
    fixture = TestBed.createComponent(LineGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
