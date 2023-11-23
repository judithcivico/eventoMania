import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tipo ="-";
  eventos: Evento[] = [];
  eventosProximos: Evento[] = [];
  eventosPasados: Evento[] = [];

  ngOnInit() {
    const json: any = data;
    this.eventos = json;
    this.eventos.map((value) => value.fecha = new Date(value.fecha));
    this.separarEventos();
  }

  esElMismoTipo(evento: Evento): boolean {
    return this.tipo === evento.direccion;
  }

  separarEventos() {
    const hoy = new Date();
    this.eventosProximos = this.eventos.filter(evento => evento.fecha >= hoy);
    this.eventosPasados = this.eventos.filter(evento => evento.fecha < hoy);
  }
}
