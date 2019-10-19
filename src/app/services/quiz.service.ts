import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // readonly rootUrl = 'http://127.0.0.1:8000/api';
  readonly rootUrl = 'https://new.embase.in/backend/api';
  constructor(private http: HttpClient) { }
  getActiveQuiz() {
    return this.http.get<any>(this.rootUrl + '/get-active-quiz-tests')
  }
  getQuiz(test_key) {
    return this.http.get<any>(this.rootUrl + '/getQuizTest/' + test_key)
  }
  submitQuiz(data) {
    return this.http.put<any>(this.rootUrl + '/submit-quiz', data)
  }
}
