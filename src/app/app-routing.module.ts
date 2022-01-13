import { SuraQuranComponent } from './sura-quran/sura-quran.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EveningAzkarComponent } from './evening-azkar/evening-azkar.component';
import { MasbahaComponent } from './masbaha/masbaha.component';
import { MorningAzkarComponent } from './morning-azkar/morning-azkar.component';
import { QuranComponent } from './quran/quran.component';
import { DeceasedComponent } from './deceased/deceased.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { SalahTimeComponent } from './salah-time/salah-time.component';
import { AzkarMuslimComponent } from './azkar-muslim/azkar-muslim.component';


const routes: Routes = [
  {path:'masba7a',component:MasbahaComponent},
  {path:'morning-azkar',component: MorningAzkarComponent},
  {path:'evening-azkar',component: EveningAzkarComponent},
  {path:'quran',component:QuranComponent},
  {path:'deceased',component:DeceasedComponent},
  {path:'sura/:id',component:SuraQuranComponent},
  {path:'prayer-times',component:PrayerTimesComponent},
  {path:'prayer-times/:id',component:SalahTimeComponent},
  {path:'',component:AzkarMuslimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
