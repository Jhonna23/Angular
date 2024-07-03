import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent1 } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent1;
  let fixture: ComponentFixture<ListComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
