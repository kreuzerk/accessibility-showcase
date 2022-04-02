import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaAttributesComponent } from './aria-attributes.component';

describe('AriaAttributesComponent', () => {
  let component: AriaAttributesComponent;
  let fixture: ComponentFixture<AriaAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriaAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
