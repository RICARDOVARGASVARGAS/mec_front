import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateIndexComponent } from './calculate-index.component';

describe('CalculateIndexComponent', () => {
  let component: CalculateIndexComponent;
  let fixture: ComponentFixture<CalculateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
