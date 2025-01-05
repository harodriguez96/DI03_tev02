import { GestionNoticiasService } from '../../servicios/gestion-noticias.service';
import { Component } from '@angular/core';
import { IArticle } from '../../interfaces/mis-interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public gestionNoticias: GestionNoticiasService) {};

  ngOnInit() { 
    this.gestionNoticias.getNoticiasREST('general'); 
  }
 
  isChecked(articulo: IArticle): boolean {
     return this.gestionNoticias.boxStatus(articulo);
  }
  
}
