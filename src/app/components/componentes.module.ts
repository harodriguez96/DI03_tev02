import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonSegmentComponent } from './ion-segment/ion-segment.component';



@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    IonicModule,
    IonSegmentComponent
  ],
  exports: [
    NoticiasComponent, IonSegmentComponent
  ]
})
export class ComponentesModule {

 }
