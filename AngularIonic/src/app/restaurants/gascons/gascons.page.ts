import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gascons',
  templateUrl: './gascons.page.html',
  styleUrls: ['./gascons.page.scss'],
})
export class GasconsPage implements OnInit {

  title: string = "Bistrot des Gascons";

  imgUrl: string = "../../../assets/imgs/desGascons.png";

  constructor() { }

  ngOnInit() {
  }

}
