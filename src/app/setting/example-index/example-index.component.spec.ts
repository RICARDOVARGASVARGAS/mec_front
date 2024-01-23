import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleIndexComponent } from './example-index.component';

describe('ExampleIndexComponent', () => {
  let component: ExampleIndexComponent;
  let fixture: ComponentFixture<ExampleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
