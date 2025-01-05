import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../interfaces/mis-interfaces'; // Importa la interfaz IArticle
import { AlertController } from '@ionic/angular'; // Importa AlertController de Ionic para manejar alertas
import { GestionNoticiasService } from '../../servicios/gestion-noticias.service'; // Importa el servicio de gestión de noticias
import { GestionStorageService } from './../../servicios/gestion-storage.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent  implements OnInit {

  @Input() noticia: IArticle = {} as IArticle;

  constructor(public gestionNoticias: GestionNoticiasService, private alerta: AlertController) { }

  ngOnInit() {}

  // Método asíncrono para mostrar una ventana de alerta
  async alertaVentana(noticia: IArticle) {
    const alert = await this.alerta.create({
      header: 'Confirmar', // Encabezado de la alerta
      message: '¿Borrar noticia?', // Mensaje de la alerta
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log("Confirmado");
            this.gestionNoticias.borrarNoticia(noticia); // Llama al método para borrar la noticia
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
  
    await alert.present(); // Muestra la alerta
  }

}
