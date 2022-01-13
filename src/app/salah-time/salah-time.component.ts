import { HttpClient } from '@angular/common/http';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salah-time',
  templateUrl: './salah-time.component.html',
  styleUrls: ['./salah-time.component.scss']
})
export class SalahTimeComponent implements OnInit {
  x:any;
  country_id : any ;
  allSalahTimes : any = [];
  constructor(private activeRoute:ActivatedRoute , private http:HttpClient) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(param => {
          this.country_id = param.get('id');
      });
      this.callPrayerTimesData();

        // { Get Date in format dd-mm-yyyy to print in url in api 
        var today = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var  todayDate = dd + '-' + mm + '-' + yyyy;
        this.x = todayDate ;
        // }          
  
    }

    country:any ;
    background:any;
    callPrayerTimesData(){
        this.http.get(`https://api.aladhan.com/v1/timingsByAddress/${this.x}?address=${this.country_id}&method=5`).subscribe(
        (time)=>{
            this.allSalahTimes = time;
            console.log(this.allSalahTimes.data.meta.timezone);
            switch(this.allSalahTimes.data.meta.timezone){
                case "Africa/Cairo" :
                    this.country = " مصر ";
                    this.background = '../../assets/flags/egypt.jpg';
                    break ;
                case "Asia/Riyadh" : 
                    this.country = " السعودية ";
                    this.background = './../assets/flags/ksa.jpg';
                    break ;
                case "Africa/Algiers" :
                    this.country = " الجزائر ";
                    this.background = '../../assets/flags/algeria.jpg';
                    break ;
                case "Africa/Casablanca" :
                    this.country = " المغرب ";
                    this.background = '../../assets/flags/morocco.jpg';
                    break ;
                case "Asia/Dubai" :
                    this.country = " الامارات ";
                    this.background = '../../assets/flags/uae.jpg';
                    break ;
                case "Asia/Damascus" : 
                    this.country = " سوريا ";
                    this.background ='../../assets/flags/syria.jpg';
                    break;
                case "Asia/Aden" :
                    this.country = " اليمن ";
                    this.background = "../../assets/flags/yemen.jpg";
                    break;
                case "Asia/Kuwait" :
                    this.country = " الكويت ";
                    this.background ='../../assets/flags/kuwait.jpg';
                    break;
                case "Asia/Amman" :
                    this.country = " الأردن ";
                    this.background = '../../assets/flags/jordan.jpg';
                    break ;
                case "Asia/Bahrain" :
                    this.country = " البحرين ";
                    this.background = '../../assets/flags/bahrain.jpg';
                    break;
                case "Asia/Beirut" :
                    this.country =" لبنان ";
                    this.background = '../../assets/flags/lebanon.jpg';
                    break;
                case "Africa/Tripoli" :
                    this.country = " ليبيا ";
                    this.background = '../../assets/flags/lybia.jpg';
                    break;
                case "Asia/Baghdad" :
                    this.country = " العراق ";
                    this.background = '../../assets/flags/iraq.jpg';
                    break;
                case "Africa/Tunis" :
                    this.country = " تونس ";
                    this.background = '../../assets/flags/tunisia.jpg';
                    break;
                case "Africa/Khartoum" :
                    this.country = " السودان ";
                    this.background = '../../assets/flags/sudan.jpg';
                    break;
                case "Asia/Qatar" :
                    this.country = " قطر ";
                    this.background = '../../assets/flags/qatar.jpg'; 
                    break;
                case "Asia/Gaza" : 
                    this.country = " فلسطين ";
                    this.background = '../../assets/flags/palestine.jpg';
                    break;
                case "Asia/Muscat" :
                    this.country = " عمان ";
                    this.background ='../../assets/flags/oman.jpg';
                    break;
            }
            
        });
        
        
    }
    
    


  
}

