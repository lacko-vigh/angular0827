import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjanlatkeresComponent } from './ajanlatkeres.component';

describe('AjanlatkeresComponent', () => {
  let component: AjanlatkeresComponent;
  let fixture: ComponentFixture<AjanlatkeresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjanlatkeresComponent]
    });
    fixture = TestBed.createComponent(AjanlatkeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
