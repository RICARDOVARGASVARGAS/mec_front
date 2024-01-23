import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEditComponent } from './year-edit.component';

describe('YearEditComponent', () => {
  let component: YearEditComponent;
  let fixture: ComponentFixture<YearEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
