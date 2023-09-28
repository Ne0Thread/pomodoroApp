import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafTortaComponent } from './graf-torta.component';

describe('GrafTortaComponent', () => {
  let component: GrafTortaComponent;
  let fixture: ComponentFixture<GrafTortaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrafTortaComponent]
    });
    fixture = TestBed.createComponent(GrafTortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
