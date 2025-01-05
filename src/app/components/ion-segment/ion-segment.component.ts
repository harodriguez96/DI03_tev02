import { Component, OnInit } from '@angular/core';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/angular/standalone';
import { GestionNoticiasService } from 'src/app/servicios/gestion-noticias.service';


@Component({
  selector: 'app-ion-segment',
  templateUrl: './ion-segment.component.html',
  styleUrls: ['./ion-segment.component.scss'],
  standalone: true,
  imports: [IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView],
})
export class IonSegmentComponent  implements OnInit {

  constructor(private gestionNoticias: GestionNoticiasService) { }

  ngOnInit() {}

  categoriaSelect(event: any) { 
    const categoria = event.detail.value; 
    this.gestionNoticias.getNoticiasREST(categoria);
}

}
