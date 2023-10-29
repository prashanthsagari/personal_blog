import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoslinkComponent } from './videoslink.component';

describe('VideoslinkComponent', () => {
  let component: VideoslinkComponent;
  let fixture: ComponentFixture<VideoslinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoslinkComponent]
    });
    fixture = TestBed.createComponent(VideoslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
