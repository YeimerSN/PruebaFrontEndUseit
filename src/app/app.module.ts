import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'material.module';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LoginGuardianGuard } from './login/login-guardian.guard';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'listarUsuarios', component: ListarUsuariosComponent, canActivate:[LoginGuardianGuard]},
  { path: 'detalleUsuario', component: DetalleUsuarioComponent, canActivate:[LoginGuardianGuard] },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarUsuariosComponent,
    DetalleUsuarioComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [LoginGuardianGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
