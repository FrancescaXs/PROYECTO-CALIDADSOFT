import { EstudianteInterface } from './interfaces/EstudianteInterface';
import { HorarioInterface } from './interfaces/HorarioInterface';
import { CursoInterface } from './interfaces/CursoInterface';
import { Injectable } from '@angular/core';
import { ActaInterface } from './interfaces/ActaInterface';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {


  ELEMENT_DATA: ActaInterface[]=[
    {
      idActa:1,
      idEstudiante_fk:8,
      promCalif: 8.5,
      promAsist: 9,
      estado:'Aprobado'
    },
    {
      idActa:2,
      idEstudiante_fk:6,
      promCalif: 8,
      promAsist: 8,
      estado:'Aprobado'
    },
    {
      idActa:3,
      idEstudiante_fk:9,
      promCalif: 6,
      promAsist: 8,
      estado:'Reprobado'
    }
  ];

  ELEMENT_DATA_CURSO: CursoInterface[]=[
    {
      idCurso: 1,
      nombreCurso: 'MOD-1-1'
    },
    {
      idCurso: 2,
      nombreCurso: 'MOD-1-2'
    },
    {
      idCurso: 3,
      nombreCurso: 'MOD-1-3'
    },
    {
      idCurso: 4,
      nombreCurso: 'MOD-1-4'
    },
    {
      idCurso: 5,
      nombreCurso: 'MOD-1-5'
    }

  ];

  ELEMENT_DATA_HORARIO: HorarioInterface[] = [
    {
      idHorario: 1,
      materia: 'Robotica',
      modulo: 7,
      curso: 'MOD-1-1',
      lunes: '-' ,
      martes: '15:00 - 16:00',
      miercoles: '-',
      jueves: '15:00 - 16:00',
      viernes: '-',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 2,
      materia: 'Desarrollo web',
      modulo: 7,
      curso: 'MOD-1-1',
      lunes: '11:00 - 12:00' ,
      martes: '-',
      miercoles: '-',
      jueves: '11:00 - 12:00',
      viernes: '-',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 3,
      materia: 'Desarrollo web',
      modulo: 7,
      curso: 'MOD-1-2',
      lunes: '-' ,
      martes: '10:00 - 11:00',
      miercoles: '-',
      jueves: '-',
      viernes: '14:00 - 15:00',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 4,
      materia: 'Cableado estructurado',
      modulo: 8,
      curso: 'MOD-1-6',
      lunes: '-' ,
      martes: '-',
      miercoles: '-',
      jueves: '16:00 - 17:00',
      viernes: '16:00 - 17:00',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 5,
      materia: 'Desarrollo web',
      modulo: 8,
      curso: 'MOD-1-5',
      lunes: '-' ,
      martes: '-',
      miercoles: '09:00 - 10:00',
      jueves: '09:00 - 10:00',
      viernes: '-',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 6,
      materia: 'Robótica',
      modulo: 8,
      curso: 'MOD-1-6',
      lunes: '17:00 - 18:00' ,
      martes: '-',
      miercoles: '-',
      jueves: '17:00 - 18:00',
      viernes: '-',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 7,
      materia: 'Robótica',
      modulo: 7,
      curso: 'MOD-1-4',
      lunes: '-' ,
      martes: '07:00 - 08:00',
      miercoles: '07:00 - 08:00',
      jueves: '-',
      viernes: '-',
      sabado: '-',
      domingo: '-'
    },
    {
      idHorario: 8,
      materia: 'Cableado estructurado',
      modulo: 9,
      curso: 'MOD-1-4',
      lunes: '-' ,
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '10:00 - 14:00',
      domingo: '-'
    }
  ];

  ELEMENT_DATA_ESTUDIANTE: EstudianteInterface[] = [
    {
      idEstudiante: 1,
      nombreEst: 'Juan',
      apellidoEst: 'Gutierrez',
      cedulaEst: '0987456321',
      fechaNacEst: new Date("15-08-1999"),
      edadEst: 23,
      direccionEst: 'Leonidas plazas',
      telefonoEst: 2222415,
      emailEst: 'juan@hotmail.com',
      nivelEducEst: '2do nivel',
      promedio: 8.85,
      medioEst: 'radio'
    },
    {
      idEstudiante: 2,
      nombreEst: 'Maria',
      apellidoEst: 'Gómez',
      cedulaEst: '0987456321',
      fechaNacEst: new Date("05-10-1997"),
      edadEst: 23,
      direccionEst: 'Leonidas plazas',
      telefonoEst: 2222415,
      emailEst: 'juan@hotmail.com',
      nivelEducEst: '2do nivel',
      promedio: 8.85,
      medioEst: 'radio'
    },
    {
      idEstudiante: 3,
      nombreEst: 'Teresa',
      apellidoEst: 'Aguilar',
      cedulaEst: '0987456321',
      fechaNacEst: new Date("24-08-2001"),
      edadEst: 23,
      direccionEst: 'Leonidas plazas',
      telefonoEst: 2222415,
      emailEst: 'juan@hotmail.com',
      nivelEducEst: '2do nivel',
      promedio: 8.85,
      medioEst: 'radio'
    }
  ]

  constructor() { }

  getActa(){
    return this.ELEMENT_DATA.slice();
  }
  getCurso(){
    return this.ELEMENT_DATA_CURSO.slice();
  }
  getHorario(){
    return this.ELEMENT_DATA_HORARIO.slice();
  }
  getEstudiante(){
    return this.ELEMENT_DATA_ESTUDIANTE.slice();
  }
}
