import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonButton, IonList, IonItem, IonBadge, IonLabel, IonAvatar, IonChip, IonInput } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonChip, IonAvatar, IonLabel, IonBadge, IonItem, IonList, IonButton, IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{
  private readonly personajesService = inject(PersonajesService)
  personajes: Personaje [] = [];
pagina: any;
  constructor() {}

    ngOnInit(): void {
        this.personajesService.cargar().subscribe(
          (listado) => {
            this.personajes = listado
          }
        );
    }

    cargarPorPagina(event:CustomEvent){
      const paginaSeleccionada = event 
    }

}
