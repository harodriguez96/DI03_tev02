import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Injectable } from '@angular/core'; // Importa Injectable para marcar la clase como un servicio inyectable
import { Observable } from 'rxjs'; // Importa Observable de RxJS para manejar operaciones asíncronas
import { INoticias, IArticle} from '../interfaces/mis-interfaces'; // Importa las interfaces necesarias
import { GestionStorageService } from './gestion-storage.service';

@Injectable({
  providedIn: 'root' // Provee el servicio en el nivel raíz
})
export class GestionNoticiasService {

  private noticias : IArticle[] =[]; // Lista de artículos obtenidos
  private noticiasLeer : IArticle[] =[]; // Lista de artículos marcados para leer


  constructor(private leerFichero: HttpClient, private servidorRest : HttpClient, private gestionAlmacenamiento : GestionStorageService) { 
    this.cargarNoticiasInicio();
  }

  async cargarNoticiasInicio() { 
    this.noticiasLeer = await this.gestionAlmacenamiento.getObject('Noticias') || []; 
    this.gestionAlmacenamiento.noticias$.subscribe(nuevasNoticias => { this.noticiasLeer = nuevasNoticias; }
    );
  }
  /*
  getNoticiasFichero() {
    let datosFichero: Observable<INoticias>;

    datosFichero = this.leerFichero.get<INoticias>("/assets/datos/articulos.json"); // Realiza una solicitud GET para obtener el archivo JSON

    datosFichero.subscribe(datos => {
      console.log('Datos recibidos:', datos); 
      this.noticias = datos.articles; // Asigna los artículos recibidos a la propiedad noticias
      console.log('Noticias actuales:', this.noticias);
    })
  }*/

  getNoticiasREST(categoria: String){
    let observableRest : Observable<INoticias> = this.servidorRest.get<INoticias>("https://newsapi.org/v2/top-headlines?category="+categoria+"&apiKey=577f97d8ccee4d78b762f5c7f3f7438b");

    observableRest.subscribe( datos => {
      console.log('Datos recibidos:', datos); 
      this.noticias = datos.articles; // Asigna los artículos recibidos a la propiedad noticias
      console.log('Noticias actuales:', this.noticias);
    }
    )
  }

  getNoticias() {
    return this.noticias; // Devuelve la lista de noticias
  }

  /*getNoticiasLeer() {
    return this.noticiasLeer; // Devuelve la lista de artículos marcados para leer
  }*/


  setNoticiasLeer(articulo: IArticle, insertar: boolean) {
    console.log('Noticias leer:', this.noticiasLeer);
    if (insertar) { 
      if (!this.noticiasLeer.some(n => n.title === articulo.title)) { // Si el artículo no está en la lista según su titulo
          this.noticiasLeer.push(articulo); // Añade el artículo a la lista
          this.gestionAlmacenamiento.setObject("Noticias", this.noticiasLeer);
          
          console.log('Noticias leer:', this.noticiasLeer);
      }
  } else {
      this.noticiasLeer = this.noticiasLeer.filter(n => n.title !== articulo.title); // Elimina el artículo
      this.gestionAlmacenamiento.setObject("Noticias", this.noticiasLeer);

      console.log('Noticias leer:', this.noticiasLeer);
      
    }
  }


  borrarNoticia(articulo : IArticle) {
    this.setNoticiasLeer(articulo, false); // Utiliza setNoticiasLeer para eliminar el artículo de la lista
  }

  boxStatus(articulo: IArticle) { 
    return this.noticiasLeer.some(n => n.title === articulo.title); // Devuelve true si el artículo está en la lista noticiasLeer

    
  }

}
