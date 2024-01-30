import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateProductComponent } from './calculate-product.component';

describe('CalculateProductComponent', () => {
  let component: CalculateProductComponent;
  let fixture: ComponentFixture<CalculateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
