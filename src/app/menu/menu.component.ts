import { Component } from '@angular/core';
import { JsonServiceService } from '../service/json-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private jsonService: JsonServiceService, private route: Router){}

  cerrarSesion(){
    //Limpieza del local storage y redireccionamiento al login
    this.jsonService.clearVariable();
    this.route.navigate(['login']);
  }

}
