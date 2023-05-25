import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/model/usuario';
import { JsonServiceService } from '../service/json-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})

export class ListarUsuariosComponent implements AfterViewInit {
  //Definiendo los parametros de las columanas 
  displayedColumns: string[] = ['userName', 'password', 'detalles'];
  //Creación de dataSource de tipo Usuario
  dataSource = new MatTableDataSource<Usuario>();
  //Declaración del paginator
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | any;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private jsonService: JsonServiceService, private router: Router) {
    //Obteniendo los datos de la función del servicio 
    jsonService.obtenerUsuarios().subscribe(response => {
      this.dataSource.data = response;
    })
  }
  //Función para filtrar los datos a la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Función para el ver detalles de usuario
  redireccionarDetalles(userId: string):void{
    this.router.navigate(['/detalleUsuario'], { queryParams: { id: userId } });
  }

}
