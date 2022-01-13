import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masbaha',
  templateUrl: './masbaha.component.html',
  styleUrls: ['./masbaha.component.scss']
})
export class MasbahaComponent implements OnInit {
  x : number = 0 ;
  constructor() { }

  ngOnInit(): void {}
  
  increament(){
    this.x++;
  }
  reset(){
    this.x = 0 ;
  }

}
