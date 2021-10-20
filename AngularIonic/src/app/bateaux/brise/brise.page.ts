import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brise',
  templateUrl: './brise.page.html',
  styleUrls: ['./brise.page.scss'],
})
export class BrisePage implements OnInit {

  title: string = "De La Brise";

  imgUrl: string = "../../../assets/imgs/deLaBrise.png";

  constructor() { }

  ngOnInit() {
  }

}
