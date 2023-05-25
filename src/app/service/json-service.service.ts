import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, throwError } from 'rxjs';
import { Rol } from 'src/model/rol';
import { Usuario } from 'src/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private urlApi: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  //Función para validar las credecianles de un usuario
  valdiarCredenciales(userName:string, password: string): Observable<any>{
    const usuario = `${this.urlApi+"/user"}?userName=${userName}&password=${password}`;
    return this.httpClient.get<any>(usuario);
  }

  //Funcion para listar todos los usuarios en una arreglo
  obtenerUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.urlApi + '/user');
  }

  //Funcion para mostrar el detalle de un usuario
  detallerUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.urlApi + `/user/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          //Existencia del Id
          return throwError(new Error('El ID de rol no existe'));
        } else {
          return throwError(error);
        }
      }),
      filter((usuario: Usuario) => !!usuario) 
    );
  }

  //Función para traer los roles dependiendo del id
  detalleRolById(id: number): Observable<Rol>{
    return this.httpClient.get<Rol>(this.urlApi + `/roles/${id}`);
  }

  //Almacenar el valor en el localstorege
  setVariable(valor: boolean): void {
    localStorage.setItem('miVariable', JSON.stringify(valor));
  }
  //Obtener valor del local storage
  getVariable(): boolean {
    const valor = localStorage.getItem('miVariable');
    return valor ? JSON.parse(valor) : false;
  }
  //Limpiar el local storage
  clearVariable(): void {
    localStorage.removeItem('miVariable');
  }
  

}
