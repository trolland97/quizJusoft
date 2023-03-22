import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstquizComponent } from './firstquiz.component';

describe('FirstquizComponent', () => {
  let component: FirstquizComponent;
  let fixture: ComponentFixture<FirstquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
