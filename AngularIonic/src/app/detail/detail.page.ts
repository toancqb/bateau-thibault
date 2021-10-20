import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonsInterface } from '../interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string;
  buttonContent: ButtonsInterface;

  title: string;

  imgUrl: string;

  contents: string[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {    

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.buttonContent = this.router.getCurrentNavigation().extras.state.buttonContent;
      }
    });

    console.log(this.id, this.buttonContent);
    this.title = this.id;
    this.imgUrl = this.buttonContent.detail.img;
    this.contents = this.buttonContent.detail.contents;  
  }
}
