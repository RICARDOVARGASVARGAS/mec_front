import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDetailComponent } from './calculate-detail.component';

describe('CalculateDetailComponent', () => {
  let component: CalculateDetailComponent;
  let fixture: ComponentFixture<CalculateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
