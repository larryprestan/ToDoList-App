import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioproyectoComponent } from './inicioproyecto.component';

describe('InicioproyectoComponent', () => {
  let component: InicioproyectoComponent;
  let fixture: ComponentFixture<InicioproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioproyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
