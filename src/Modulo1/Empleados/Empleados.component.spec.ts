import { TestBed } from '@angular/core/testing';
import { ComponentePrincipal } from './Empleados.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ComponentePrincipal],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComponentePrincipal);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PracticaEmpleados'`, () => {
    const fixture = TestBed.createComponent(ComponentePrincipal);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ComponentePrincipal);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'PracticaEmpleados app is running!'
    );
  });
});
