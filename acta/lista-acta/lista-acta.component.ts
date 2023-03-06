import { CursoInterface } from './../../interfaces/CursoInterface';
import { Component, OnInit, Inject } from '@angular/core';
import { ActaInterface } from 'src/app/interfaces/ActaInterface';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from 'src/app/servicios.service';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/mensajes/dialog-confirm/dialog-confirm.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-acta',
  templateUrl: './lista-acta.component.html',
  styleUrls: ['./lista-acta.component.css']
})
export class ListaActaComponent implements OnInit{
  flag: Boolean=false;
  actaI: ActaInterface []= [];
  selectedCurso: CursoInterface []= [
    {idCurso:0, nombreCurso:''}
  ];


  dataSource = new MatTableDataSource<any>;
  cabecera: string[] = ['idActa', 'idEstudiante', 'promCalif', 'promAsist', 'estado'];

  //Constructor
  constructor(private servicio:ServiciosService,
    private dialog:MatDialog){

  };

  ngOnInit(): void {
    this.selectedCurso = this.servicio.getCurso();
  }

  generarActa(){
    this.actaI = this.servicio.getActa();
    this.dataSource=new MatTableDataSource(this.actaI);
  }
  seleccionarCurso(){
    /*this.dialog.open(DialogConfirmComponent, {
      width:'600px',
      height: '150px',
      data: 'Acta cargada con éxito'
    });*/
    const contador = timer(1500);

    const showAlert = () =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Generando Acta de Calificaciones',
        text: "Acta cargada con éxito",
        footer: 'MATERIA - PARALELO',
        showConfirmButton: false,
        timer: 2000
      })
     }

    if(this.selectedCurso==null){
      this.flag=true;
    }else{
      this.flag=false;
      showAlert();
      contador.subscribe(()=>{
        this.generarActa();
      });
    }
  }
}
