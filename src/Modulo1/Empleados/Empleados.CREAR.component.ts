export class creaEmpleados {
  private nombre: string = '';
  private apellido: string = '';
  private cargo: string = '';
  private sueldo: number = 0;

  constructor(nombre: string, apellido: string, cargo: string, sueldo: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.sueldo = sueldo;
  }

  public getNombre(): string {
    return this.nombre;
  }
  public get(campo: string): any {
    switch (campo) {
      case 'nombre':
        return this.nombre;
        break;
      case 'apellido':
        return this.apellido;
        break;
      case 'cargo':
        return this.cargo;
        break;
      case 'sueldo':
        return this.sueldo;
        break;

      default:
        alert('Opción no válida');
        break;
    }
  }
}
