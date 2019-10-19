import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';
import { QuizService } from 'app/services/quiz.service';
import { timer } from 'rxjs';
declare var $: any

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})


export class QuizComponent implements OnInit {

  startExam = false;
  endExam = false;
  quiz_info: any;
  quiz_details: any;
  details: any;
  quiz: any;
  answ: any;
  currentQuiz: any;
  ansList = [];
  timerAlert = false;
  timeLeft: number = 1000;
  interval;
  complete = false;
  OK = false;
  startQuiz = false;
  selectedOption: any;
  index: number = 0;
  answeredOption = [];
  res: any;
  emptyCheck: boolean;

  constructor(private _formBuilder: FormBuilder, private quizservice: QuizService) { }

  ngOnInit() {
    this.quizservice.getActiveQuiz().subscribe(res => {
      // console.log(res);
      this.quiz_info = res.quiz_details;
    });
  }

  onOK($event, test_key) {
    this.OK = true;
    this.quizservice.getQuiz(test_key).subscribe((data: any) => {
      this.quiz = data;
      // console.log(data);
    });
    console.log("OK Button Pressed", $event);
    this.currentQuiz = test_key;
    // console.log(this.currentQuiz);
  }
  onGoBack($event) {
    this.OK = false;
    console.log("Go Back Pressed");
  }
  dateAsYYYYMMDDHHNNSS(date): string {
    return date.getFullYear()
      + '-' + this.leftpad(date.getMonth() + 1, 2)
      + '-' + this.leftpad(date.getDate(), 2)
      + ' ' + this.leftpad(date.getHours(), 2)
      + ':' + this.leftpad(date.getMinutes(), 2)
      + ':' + this.leftpad(date.getSeconds(), 2);
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }



  onstartTimer($event, test_time, test_key) {
    this.startExam = true;
    this.startQuiz = true;
    const curTime = this.dateAsYYYYMMDDHHNNSS(new Date());
    console.log(curTime);
    this.quiz.quiz['start_time'] = curTime;
    console.log("Timer started", $event);
    this.timeLeft = test_time;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
        clearInterval(this.interval);
        console.log("timerstopped");
        if (this.emptyCheck === true) {
          this.res =
            {
              mark: 0,
              total: this.quiz.quiz.total_question,
              total_true: 0,
              total_false: 0,
              mark_per_question: 0
            }
          // console.log(this.res);

        }
        console.log("Completed", $event);
        this.quiz.quiz['std_admissionnumber'] = 1018;
        this.quiz.quiz['user_type'] = 2;
        this.quizservice.submitQuiz(this.quiz).subscribe(res => {
          // console.log(res);
          this.res = res;
        }, error => {
          console.log(error.error.message);
        });
        if (this.complete === false) {
          this.startExam = false;
          this.endExam = true;
          this.complete = true;
          this.timerAlert = true;
          // console.log(this.quiz);
        }
      }

    }, 1000);

  }
  onOptionClick($event) {
    this.quiz.quiz_details[this.index].is_selected = true;
    console.log("Option Clicked", $event);
    this.answeredOption[this.index] = $event.value;
    // console.log(this.answeredOption);
  }
  onSaveAndNextButtonClicked($event) {

    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '1';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    console.log("Submitted Option", $event);
    // console.log(this.ansList);
  }
  onSaveButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '1';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    // console.log(this.ansList);
  }
  onMarkForReviewAndNextButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '2';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    // console.log(this.ansList);
  }
  onMarkForReviewButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '2';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    // console.log(this.ansList);
  }
  onSaveAndMarkForReviewButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '3';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    // console.log(this.ansList);
  }
  onSaveAndMarkForReviewLastButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '3';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    // console.log(this.ansList);
  }

  onNext($event) {
    this.index++;
    console.log("ON NEXT", $event);
  }
  onPrev($event) {
    this.index--;
    console.log("ON PREV", $event);
  }
  onLoadQuestion($event, i) {
    console.log("on Load question Button Clicked", $event);
    this.index = i;
  }
  onEditTest() {
    if (Array.isArray(this.ansList) && this.ansList.length) {
      this.emptyCheck = false;
      // console.log(this.emptyCheck)
    }
    else {
      this.emptyCheck = true;
      // console.log(this.emptyCheck)
    }
  }
  onComplete($event) {
    clearInterval(this.interval);
    console.log("timerstopped");
    this.startExam = false;
    this.endExam = true;
    this.complete = true;
    $('#confirmationModal').modal('hide');
    this.quiz.quiz['std_admissionnumber'] = 1018;
    this.quiz.quiz['user_type'] = 2;
    // console.log(this.quiz);
    this.quizservice.submitQuiz(this.quiz).subscribe(res => {
      console.log(res);
      this.res = res;
    }, error => {
      console.log(error.error.message);
    });
    console.log("Completed", $event);
  }
  onBackToTests($event) {
    this.OK = false;
    this.complete = false;
    this.startQuiz = false;
    this.endExam = false;
    this.timerAlert = false;
    this.ansList = [];
    this.answeredOption = [];
    this.index = 0
  }

}



