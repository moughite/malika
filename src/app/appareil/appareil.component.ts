import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService:AppareilService) { }

  @Input() appareilName:string;
  @Input() appareilStatus:string;
  @Input() indexOfAppareil:number;
  @Input() id:number;

   
  
  ngOnInit() {
  }

  getStatus(){
   return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus==='allumer'){
      return 'green';
    }else if(this.appareilStatus==='eteint'){
      return 'red';
    }
  }

  onAllumer(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onEteint(index:number){
    this.appareilService.switchOnOff(this.indexOfAppareil);
  }




}
