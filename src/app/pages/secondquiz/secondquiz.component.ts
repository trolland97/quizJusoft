import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-secondquiz',
  templateUrl: './secondquiz.component.html',
  styleUrls: ['./secondquiz.component.css']
})
export class SecondquizComponent implements OnInit {

  public questions: Question[];
  public index: number = 0;
  public answers: string[] = [];
  public selectedAnswer: number = null;
  public points: number = 0;

  constructor(private quiz: QuizServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getSecondQuestions();
    this.generateAnswers();
  }

  getSecondQuestions() {
    this.quiz.getSecondQuestion()
      .subscribe(questions => this.questions = questions);
  }

  generateAnswers() {
    this.answers = [];
    this.answers = this.answers.concat(this.questions[this.index].correct_answer, this.questions[this.index].incorrect_answers);
    let random = Math.floor(Math.random() * this.answers.length);
    let temp = this.answers[random];
    this.answers[random] = this.answers[0];
    this.answers[0] = temp;
  }

  next() {
    if(this.answers[this.selectedAnswer] == this.questions[this.index].correct_answer) {
      this.points++;
    } 
    else {
      this.points += 0;
    }

    this.index++;
    this.selectedAnswer = null;
    this.generateAnswers();
  }

  finish() {
    if(this.answers[this.selectedAnswer] == this.questions[this.index].correct_answer) {
      this.points++;
    } 
    else {
      this.points += 0;
    }
    localStorage.setItem('result_second', this.points.toString())
    alert("Elért pontszám: " + this.points)
    this.router.navigate(["/points"]);
  }

}
