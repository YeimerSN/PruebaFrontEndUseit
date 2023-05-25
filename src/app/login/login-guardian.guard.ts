import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { JsonServiceService } from '../service/json-service.service';

@Injectable()
export class LoginGuardianGuard implements CanActivate {

  constructor(private route: Router, private jsonService: JsonServiceService){}

  canActivate(): boolean {
    const valor = this.jsonService.getVariable();
    if (valor) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
  
}
