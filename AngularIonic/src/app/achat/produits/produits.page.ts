import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AchatInterface, ProduitInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  name: string;
  produits: ProduitInterface[];
  iconUrl = 'poulpe.png';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.produits = this.router.getCurrentNavigation().extras.state.detail;
      }
    });

    console.log(this.produits);
  }

  getUrl(name: string) {
    return '../../assets/icon/' + name;
  }   

}
