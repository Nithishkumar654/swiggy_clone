import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOptionsComponent } from './food-options.component';

describe('FoodOptionsComponent', () => {
  let component: FoodOptionsComponent;
  let fixture: ComponentFixture<FoodOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
