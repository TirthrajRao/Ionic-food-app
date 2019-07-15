import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodItemPage } from './edit-food-item.page';

describe('EditFoodItemPage', () => {
  let component: EditFoodItemPage;
  let fixture: ComponentFixture<EditFoodItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
