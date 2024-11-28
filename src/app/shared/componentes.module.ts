import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NoticiasHeaderComponent } from './noticias-header/noticias-header.component';



@NgModule({
  declarations: [HeaderComponent, NoticiasHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    NoticiasHeaderComponent
    
  ]
})
export class ComponentesModule {

 }
