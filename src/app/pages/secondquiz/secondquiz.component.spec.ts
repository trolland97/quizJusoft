import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondquizComponent } from './secondquiz.component';

describe('SecondquizComponent', () => {
  let component: SecondquizComponent;
  let fixture: ComponentFixture<SecondquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
