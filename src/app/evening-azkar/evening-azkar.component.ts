import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evening-azkar',
  templateUrl: './evening-azkar.component.html',
  styleUrls: ['./evening-azkar.component.scss']
})
export class EveningAzkarComponent implements OnInit {

  constructor(public http:HttpClient) { }
  
  _url:string = 'https://ahegazy.github.io/muslimKit/json/azkar_massa.json';
  allAzkar:any = [];
  callApi(){
    this.http.get(this._url).subscribe((data)=>{
      console.log(data);
      this.allAzkar = data ;
      this.allAzkar.content.forEach((el:any) => el.count=0);
    });
  }

  ngOnInit(): void {
    this.callApi();
    // document.getElementsByClassName('swal2-actions')[0].
    // getElementsByClassName('swal2-confirm')[0].textContent= 'close';
  }

  reset(index:number){
    this.allAzkar.content[index].count = 0 ;
  }
  
  counter(index:number){
    if( this.allAzkar.content[index].count < this.allAzkar.content[index].repeat){
      this.allAzkar.content[index].count++;
    }else{
      Swal.fire(
          'انتهيت',
          ' جزاك الله كل خير , جعله الله في ميزان حسناتك ♥ ',
          'success'
      );
    }
    
  }
  
  

  

   
}
