import { GestionNoticiasService } from '../../servicios/gestion-noticias.service';
import { Component } from '@angular/core';
import { IArticle } from '../../interfaces/mis-interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionNoticias: GestionNoticiasService, private alerta : AlertController) {};

  async alertaVentana(noticia: IArticle) {
    const alert = await this.alerta.create({
      header: 'Confirmar',
      message: '¿Borrar noticia?',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log("Confirmado");
            this.gestionNoticias.borrarNoticia(noticia);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Cancelado");
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
