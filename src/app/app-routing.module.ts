import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeltdownComponent } from './pages/meltdown/meltdown.component';
import { SpectreComponent } from './pages/spectre/spectre.component';
import { Spectre2Component } from './pages/spectre2/spectre2.component';

import { HomeComponent } from './pages/home/home.component';
import { BtbComponent } from './pages/spectre-btb/btb.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meltdown', component: MeltdownComponent },
  { path: 'spectre', component: SpectreComponent },
  { path: 'spectre2', component: Spectre2Component },
  { path: 'btb', component: BtbComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
