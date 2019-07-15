import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyItemComponent } from './my-item.component';

describe('MyItemComponent', () => {
  let component: MyItemComponent;
  let fixture: ComponentFixture<MyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
