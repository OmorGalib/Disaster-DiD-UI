import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrissisesComponent } from './crissises.component';

describe('CrissisesComponent', () => {
  let component: CrissisesComponent;
  let fixture: ComponentFixture<CrissisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrissisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrissisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
