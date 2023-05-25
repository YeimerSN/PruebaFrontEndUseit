import { Component } from '@angular/core';
import { JsonServiceService } from '../service/json-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Variable booleana para mostrar un mensaje al fallar el login 
  mensaje: boolean = false;
  //Injectando el servicio creado para las operaciones con el jsonService
  constructor(private jsonService: JsonServiceService) { }

  //Funcion para validar el login segun usuario y contraseña
  login(userName: string, password: string): void {
    //Llamada a la función del servicio para validar los usuarios
    this.jsonService.valdiarCredenciales(userName, password).subscribe(response => {
      //Validación de la existencia del usuario
      if(response.length > 0){
        this.jsonService.setVariable(true);
        window.location.href = '/listarUsuarios';
      } else {
        this.mensaje = true;
      } 
    })

  }
}
