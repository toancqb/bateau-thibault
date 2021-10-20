import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.page.html',
  styleUrls: ['./bar.page.scss'],
})
export class BarPage implements OnInit {

  title: string = "Bar rôti au laurier frais";

  imgUrl: string = "../../../assets/imgs/barRecette.png";

  constructor() { }

  ngOnInit() {
  }

}
