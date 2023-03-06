import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { HorarioInterface } from 'src/app/interfaces/HorarioInterface';

@Component({
  selector: 'app-lista-horario',
  templateUrl: './lista-horario.component.html',
  styleUrls: ['./lista-horario.component.css']
})
export class ListaHorarioComponent implements OnInit{
  dataSource = new MatTableDataSource<any>;
  horarioI: HorarioInterface[] = [];
  cabecera: string[] = ['idHorario', 'idMateria', 'modulo', 'idCurso', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  constructor(private servicio:ServiciosService){

  };

  ngOnInit(): void {
    this.horarioI = this.servicio.getHorario();
    this.dataSource=new MatTableDataSource(this.horarioI);
  }
}
