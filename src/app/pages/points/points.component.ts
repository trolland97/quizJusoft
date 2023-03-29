import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  score: string;
  second_score: string;

  constructor() { }

  ngOnInit(): void {
    this.score = localStorage.getItem("result")
    this.second_score = localStorage.getItem("result_second")
  }

}
