import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-times',
  templateUrl: './prayer-times.component.html',
  styleUrls: ['./prayer-times.component.scss']
})
export class PrayerTimesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  Flags:any = []

  ngOnInit(): void {
      this.http.get('../../assets/flags.json').subscribe((data)=>{
            this.Flags = data ; 
            console.log(data);
            
      })
  }

}



