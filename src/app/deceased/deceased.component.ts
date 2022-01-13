import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-deceased',
  templateUrl: './deceased.component.html',
  styleUrls: ['./deceased.component.scss']
})
export class DeceasedComponent implements OnInit {
  
  
  constructor() { }
   
  ngOnInit(): void {}
  display:boolean = false;
  x :any = '';
  val : string = '';
  writeName(){
    if(this.val != ''){
        this.display = true ;
        this.x = this.val;
        this.val = '';
    }     
  }

  

}


