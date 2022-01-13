import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-morning-azkar',
  templateUrl: './morning-azkar.component.html',
  styleUrls: ['./morning-azkar.component.scss']
})
export class MorningAzkarComponent implements OnInit {

  constructor(public http:HttpClient) { }
  _url:string = 'https://ahegazy.github.io/muslimKit/json/azkar_sabah.json';
  allAzkar:any = [];
  callApi(){
    
    this.http.get(this._url).subscribe((data)=>{
      console.log(data);
      this.allAzkar = data ; // assign data

      this.allAzkar.content.forEach((el:any)=>el.count =0);
    });
  }
  ngOnInit(): void {
    this.callApi();
  }
 
  reset(index:number){
    this.allAzkar.content[index].count = 0
  }
  conter(index:number){
    
    if(this.allAzkar.content[index].count < this.allAzkar.content[index].repeat){
      this.allAzkar.content[index].count ++;
    }else{
      Swal.fire(
        'انتهيت',
        ' جزاك الله كل خير , جعله الله في ميزان حسناتك ♥ ',
        'success'
    );
    }
  }


}
