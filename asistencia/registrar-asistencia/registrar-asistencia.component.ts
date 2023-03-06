import { MatTableDataSource } from '@angular/material/table';
import { EstudianteInterface } from './../../interfaces/EstudianteInterface';
import { ServiciosService } from 'src/app/servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit{
  estudianteI: EstudianteInterface[]=[];
  dataSource = new MatTableDataSource<any>;
  cabecera: string[] = ['idEstudiante', 'nombreEst', 'apellidoEst','asistencias'];
  allComplete: boolean=false;

  constructor(private servicio:ServiciosService ) {
  }

  ngOnInit(): void {
    this.estudianteI = this.servicio.getEstudiante();
    this.dataSource = new MatTableDataSource(this.estudianteI);
  }
}
