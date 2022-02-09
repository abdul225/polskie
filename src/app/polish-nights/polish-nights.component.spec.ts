import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishNightsComponent } from './polish-nights.component';

describe('PolishNightsComponent', () => {
  let component: PolishNightsComponent;
  let fixture: ComponentFixture<PolishNightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolishNightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishNightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
