import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarGrafComponent } from './radar-graf.component';

describe('RadarGrafComponent', () => {
  let component: RadarGrafComponent;
  let fixture: ComponentFixture<RadarGrafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadarGrafComponent]
    });
    fixture = TestBed.createComponent(RadarGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
