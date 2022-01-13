import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.callFahrasData();
    // this.callQuranData();
  }

  allFahrasData :any = [] ;
  callFahrasData(){
    this.http.get('../../assets/fahras.json').subscribe((data)=>{
      this.allFahrasData = data ;
    });
  }

  

}
