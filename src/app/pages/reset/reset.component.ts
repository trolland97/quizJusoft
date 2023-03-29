import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {


  descHidden = true;
  ngOnInit(): void {
    this.resetScore;
  }
  resetScore(){
    localStorage.removeItem("result");
    localStorage.removeItem("result_second");
    this.descHidden = false;
  }

}
