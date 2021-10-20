import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquilon',
  templateUrl: './aquilon.page.html',
  styleUrls: ['./aquilon.page.scss'],
})
export class AquilonPage implements OnInit {

  title: string = "Aquilon";

  imgUrl: string = "../../../assets/imgs/aquilon.png";

  constructor() { }

  ngOnInit() {
  }

}
