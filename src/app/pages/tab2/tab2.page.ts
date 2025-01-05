import { GestionStorageService } from './../../servicios/gestion-storage.service';
import { GestionNoticiasService } from './../../servicios/gestion-noticias.service';
import { Component } from '@angular/core'; // Importa el decorador Component de Angular
import { IArticle } from 'src/app/interfaces/mis-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab2', // Selecciona el componente con el nombre 'app-tab2'
  templateUrl: 'tab2.page.html', // Ruta del archivo de la plantilla HTML
  styleUrls: ['tab2.page.scss'] // Ruta del archivo de estilos SCSS
})
export class Tab2Page {
// Creamos el observable
  noticiasAlmacenadas: any[] = []; 
  
  constructor(private gestionAlmacenamiento: GestionStorageService) {} 
  
  // Inicializamos el observable y nos suscribimos
  // Cada vez que cambien los datos se ejecurá la función arrow
  // y se actualizará el valor del atributo
  async ngOnInit() { 
    this.noticiasAlmacenadas = await this.gestionAlmacenamiento.getObject('Noticias') || []; 
    this.gestionAlmacenamiento.noticias$.subscribe(nuevasNoticias => { this.noticiasAlmacenadas = nuevasNoticias; }
    );

}
}
