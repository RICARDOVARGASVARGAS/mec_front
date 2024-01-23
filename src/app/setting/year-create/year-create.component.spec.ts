import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearCreateComponent } from './year-create.component';

describe('YearCreateComponent', () => {
  let component: YearCreateComponent;
  let fixture: ComponentFixture<YearCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
