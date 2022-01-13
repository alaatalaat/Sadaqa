import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sura-quran',
  templateUrl: './sura-quran.component.html',
  styleUrls: ['./sura-quran.component.scss']
})
export class SuraQuranComponent implements OnInit {
  allPageData :any = [] ;
  sura_id:any ;
  constructor( private activeRoute: ActivatedRoute , private http:HttpClient ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param =>{

      this.sura_id = param.get('id');
      this.callQuranData()
    })
  }

  callQuranData(){
    this.http.get(`https://api.alquran.cloud/v1/surah/${this.sura_id}/quran-uthmani`).subscribe((data)=>{
      this.allPageData = data ;

      console.log(this.allPageData?.data?.ayahs[0].text.slice(0,39))

    });
  }

}
