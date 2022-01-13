import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azkar-muslim',
  templateUrl: './azkar-muslim.component.html',
  styleUrls: ['./azkar-muslim.component.scss']
})
export class AzkarMuslimComponent implements OnInit {

  constructor(public http:HttpClient) { }
  _url:string = '../../assets/azkarMuslim.json';
  allAzkarMuslim:any = [];
  getAzkarMuslim(){
    this.http.get(this._url).subscribe((data)=>{
      console.log(data);
      this.allAzkarMuslim = data ;
    });
  }
  ngOnInit(): void {
    this.getAzkarMuslim();
  }

  
  reset(index:number){
    this.allAzkarMuslim[index].counter = 0 ;
  }

  counter(index:number){
    this.allAzkarMuslim[index].counter++;
  }
}
