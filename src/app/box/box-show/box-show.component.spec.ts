import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShowComponent } from './box-show.component';

describe('BoxShowComponent', () => {
  let component: BoxShowComponent;
  let fixture: ComponentFixture<BoxShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
