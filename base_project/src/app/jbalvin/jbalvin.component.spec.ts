import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbalvinComponent } from './jbalvin.component';

describe('JbalvinComponent', () => {
  let component: JbalvinComponent;
  let fixture: ComponentFixture<JbalvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JbalvinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JbalvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
