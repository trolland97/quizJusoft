import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Question } from '../model/question';

export interface QuizResponse {
  results: Question[];
}

@Injectable({
  providedIn: 'root'
})

export class QuizServiceService {

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<Question[]> {
    return this.http.get<QuizResponse>('https://opentdb.com/api.php?amount=5&category=15&type=multiple')
      .pipe(map((data: any) =>  {
        return data.results;
      }))
  }

  getSecondQuestion(): Observable<Question[]> {
    return this.http.get<QuizResponse>('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
      .pipe(map((data: any) =>  {
        return data.results;
      }))
  }

  }

