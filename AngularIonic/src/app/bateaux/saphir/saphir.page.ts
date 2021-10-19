import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saphir',
  templateUrl: './saphir.page.html',
  styleUrls: ['./saphir.page.scss'],
})
export class SaphirPage implements OnInit {

  title: string = "Saphir";

  imgUrl: string = "../../../assets/imgs/saphir.png";

  constructor() { }

  ngOnInit() {
  }

}
