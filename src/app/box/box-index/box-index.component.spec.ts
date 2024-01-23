import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxIndexComponent } from './box-index.component';

describe('BoxIndexComponent', () => {
  let component: BoxIndexComponent;
  let fixture: ComponentFixture<BoxIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
