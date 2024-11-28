import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INoticias, IArticle} from '../interfaces/mis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {

  private noticias : IArticle[] =[]; 
  private noticiasLeer : IArticle[] =[];
  private checkedBox: boolean = false; 

  constructor(private leerFichero: HttpClient) { 
    this.getNoticiasFichero();
  }

  getNoticiasFichero(){
    let datosFichero: Observable<INoticias>;

    datosFichero = this.leerFichero.get<INoticias>("/assets/datos/articulos.json");

    datosFichero.subscribe(datos => {
      console.log('Datos recibidos:', datos); 
      this.noticias = datos.articles;
      console.log('Noticias actuales:', this.noticias);
    })
  }

  getNoticias(){
    return this.noticias;
  }

  getNoticiasLeer(){
    return this.noticiasLeer;
  }

  setNoticiasLeer(articulo: IArticle, insertar: boolean) {
    if (insertar) { 
      if (!this.noticiasLeer.includes(articulo)) {
        this.noticiasLeer.push(articulo);
        console.log('Noticias leer:', this.noticiasLeer);
      }
    } else {
      const index = this.noticiasLeer.indexOf(articulo);
      if (index > -1) { 
        this.noticiasLeer.splice(index, 1);

        console.log('Noticias leer:', this.noticiasLeer);
      }
    }
  }

  borrarNoticia(articulo : IArticle){
    this.setNoticiasLeer(articulo, false);
  }

  boxStatus(articulo: IArticle){ 
    return this.noticiasLeer.includes(articulo); 
  }
}
