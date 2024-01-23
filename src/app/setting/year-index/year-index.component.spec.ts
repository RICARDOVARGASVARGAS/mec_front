import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearIndexComponent } from './year-index.component';

describe('YearIndexComponent', () => {
  let component: YearIndexComponent;
  let fixture: ComponentFixture<YearIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
