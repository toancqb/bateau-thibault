import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homard',
  templateUrl: './homard.page.html',
  styleUrls: ['./homard.page.scss'],
})
export class HomardPage implements OnInit {

  title: string = "Homard en chaud-froid";

  imgUrl: string = "../../../assets/imgs/homardRecette.png";

  constructor() { }

  ngOnInit() {
  }

}
