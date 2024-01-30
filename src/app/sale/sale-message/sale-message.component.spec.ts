import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMessageComponent } from './sale-message.component';

describe('SaleMessageComponent', () => {
  let component: SaleMessageComponent;
  let fixture: ComponentFixture<SaleMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
