import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-simple-appareil',
  templateUrl: './simple-appareil.component.html',
  styleUrls: ['./simple-appareil.component.scss']
})
export class SimpleAppareilComponent implements OnInit {

  name:string='appareil';
  status:string='status';

  constructor(private appareilService:AppareilService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const id=this.activatedRoute.snapshot.params['id'];
    this.name=this.appareilService.getAppareilById(+id).name;
    this.status=this.appareilService.getAppareilById(+id).status;
    
  }

  getColor(){
   if(this.status==='allumer'){
     return 'green';
   }else if(this.status==='eteint'){
     return 'red';
   }

  }

}
