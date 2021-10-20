import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastmicher',
  templateUrl: './gastmicher.page.html',
  styleUrls: ['./gastmicher.page.scss'],
})
export class GastmicherPage implements OnInit {

  title: string = "Gast Micher";

  imgUrl: string = "../../../assets/imgs/gastMicher.png";

  constructor() { }

  ngOnInit() {
  }

}
