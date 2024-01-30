import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateEditComponent } from './calculate-edit.component';

describe('CalculateEditComponent', () => {
  let component: CalculateEditComponent;
  let fixture: ComponentFixture<CalculateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
