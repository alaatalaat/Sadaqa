import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MasbahaComponent } from './masbaha/masbaha.component';
import { MorningAzkarComponent } from './morning-azkar/morning-azkar.component';
import { EveningAzkarComponent } from './evening-azkar/evening-azkar.component';
import { QuranComponent } from './quran/quran.component';
import { SuraQuranComponent } from './sura-quran/sura-quran.component';
import { DeceasedComponent } from './deceased/deceased.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { SalahTimeComponent } from './salah-time/salah-time.component';
import { AzkarMuslimComponent } from './azkar-muslim/azkar-muslim.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasbahaComponent,
    MorningAzkarComponent,
    EveningAzkarComponent,
    QuranComponent,
    SuraQuranComponent,
    DeceasedComponent,
    PrayerTimesComponent,
    SalahTimeComponent,
    AzkarMuslimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
