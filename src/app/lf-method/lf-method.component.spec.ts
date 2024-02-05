import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfMethodComponent } from './lf-method.component';

describe('LfMethodComponent', () => {
  let component: LfMethodComponent;
  let fixture: ComponentFixture<LfMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LfMethodComponent]
    });
    fixture = TestBed.createComponent(LfMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
