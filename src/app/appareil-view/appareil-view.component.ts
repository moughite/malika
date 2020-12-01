import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth=false;

  appareils:any[];

  nameApplication:'Moughite Appp';

  constructor(private appareilService:AppareilService) {
    setTimeout(() => {
      this.isAuth=true;
    }, 2000);
   }

  ngOnInit() {
    this.appareils=this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.swithcOnAll();
  }

  onEteint(){
    this.appareilService.switchOffAll();
  }


}
