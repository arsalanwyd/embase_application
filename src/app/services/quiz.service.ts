import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // readonly rootUrl = 'http://127.0.0.1:8000/api';
  // readonly rootUrl = 'https://new.embase.in/backend/api';
  readonly rootUrl = window.location.origin + '/backend/api';
  constructor(private http: HttpClient) { }
  getQuizSubjects() {
    return this.http.get<any>(this.rootUrl + '/get-quiz-subjects')
  }
  // getQuestions(){
  //   return this.http.get<any>(this.rootUrl + '/get-test-questions')
  // }
  getQuestions(subject_id) {
    return this.http.get<any>(this.rootUrl + '/get-quiz-subject_questions/' + subject_id)
  }
  getAllTest() {
    return this.http.get<any>(this.rootUrl + '/get-all-quiz-tests')
  }
  // getTest(test_id) {
  //   return this.http.get<any>(this.rootUrl + '/get-test/' + test_id)
  // }
  // getResults(){
  //   return this.http.get<any>(this.rootUrl + '/get-test-questions')
  // }
  // getQuestions(selectedSubject) {
  //   return this.http.get<any>(this.rootUrl + '/getQuizTest/' + selectedSubject)
  // }
  getActiveQuiz() {
    return this.http.get<any>(this.rootUrl + '/get-active-quiz-tests')
  }
  getQuiz(test_key) {
    return this.http.get<any>(this.rootUrl + '/getQuizTest/' + test_key)
  }
  submitQuiz(data) {
    return this.http.put<any>(this.rootUrl + '/submit-quiz', data)
  }
  addSubject(data) {
    return this.http.put<any>(this.rootUrl + '/add-quiz-subjects', data)
  }
  addQuestion(data) {
    return this.http.put<any>(this.rootUrl + '/add-quiz-questions', data)
  }
  updateQuestion(data) {
    return this.http.put<any>(this.rootUrl + '/update-quiz-questions', data)
  }
  addTest(data) {
    return this.http.put<any>(this.rootUrl + '/add-quiz-test', data)
  }
  updateTest(data) {
    return this.http.put<any>(this.rootUrl + '/update-quiz-test', data)
  }
}
