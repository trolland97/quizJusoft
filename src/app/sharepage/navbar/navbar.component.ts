import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  displayVal='';
  menuHidden= true;
  nameHidden= false;
  playerHidden = true;
  getValue(val:string){
    console.warn()
    this.displayVal = val;
    this.menuHidden= !this.menuHidden;
    this.nameHidden =!this.nameHidden;
    this.playerHidden =!this.playerHidden;
  }
}
