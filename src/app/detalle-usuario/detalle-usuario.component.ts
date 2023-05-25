import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonServiceService } from '../service/json-service.service';
import { Usuario } from 'src/model/usuario';
import { Rol } from 'src/model/rol';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  
  //Variable del id para realizar las solicitudes
  userId: number = 0;
  //Variables para almacenar los datos de roles y usuarios
  usuario: Usuario | undefined;
  rol: Rol | undefined;
  //Variable para validar error
  error: boolean = false;
  mensajeError: string = "";

  constructor(private route: ActivatedRoute,
    private jsonService: JsonServiceService){
    
  }
  ngOnInit(): void {
    //Implementado queryParams, es decir, el parametro que se pasa por Id
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      //Llmado a las funciones del servicio
      this.jsonService.detallerUsuarioById(this.userId).subscribe(response => {
        this.usuario = response;

      }, error => {
        //Mostrando el error
        this.error = true;
        this.mensajeError = "El Id no fue encontrado, verifica que existe";
      });

      this.jsonService.detalleRolById(this.userId).subscribe(response => {
        this.rol = response;
      }, error => {
        this.error = true;
        console.log("Error: ", error)
      });

    })

  }


}
