import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-noticias-header',
  templateUrl: './noticias-header.component.html',
  styleUrls: ['./noticias-header.component.scss'],
})
export class NoticiasHeaderComponent  implements OnInit {

  @Input() noticia: any
  constructor() { }

  ngOnInit() {}

}
