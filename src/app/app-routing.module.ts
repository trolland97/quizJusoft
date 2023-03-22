import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResetComponent } from './pages/reset/reset.component';
import { FirstquizComponent } from './pages/firstquiz/firstquiz.component';
import { SecondquizComponent } from './pages/secondquiz/secondquiz.component';
import { PointsComponent } from './pages/points/points.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reset',component:ResetComponent},
  {path:'firstquiz',component:FirstquizComponent},
  {path:'secondquiz',component:SecondquizComponent},
  {path:'points',component:PointsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }