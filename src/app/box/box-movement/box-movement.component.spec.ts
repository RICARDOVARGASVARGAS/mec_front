import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMovementComponent } from './box-movement.component';

describe('BoxMovementComponent', () => {
  let component: BoxMovementComponent;
  let fixture: ComponentFixture<BoxMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxMovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
