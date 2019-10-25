import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';
import { QuizService } from 'app/services/quiz.service';
import { timer } from 'rxjs';
import { MessageService } from 'app/services/message.service';
declare var $: any

@Component({
  selector: 'app-staff-quiz',
  templateUrl: './staff-quiz.component.html',
  styleUrls: ['./staff-quiz.component.scss']
})
export class StaffQuizComponent implements OnInit {

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
  timer: number;
  interval;
  complete = false;
  OK = false;
  startQuiz = false;
  selectedOption: any;
  index: number = 0;
  answeredOption = [];
  res: any;
  emptyCheck: boolean;
  quest: string;
  isAnswered = false;
  selectedSubject;
  addSubjectForm: FormGroup;
  addQuestionForm: FormGroup;
  editQuestionForm: FormGroup;
  subjectForm: FormGroup;
  addTestForm: FormGroup;
  editTestForm: FormGroup;
  resultSelectForm: FormGroup;
  quizForm: FormGroup;
  edittable: any;
  edittest: any;
  editresult: any;
  editquiz: any;
  addedQuestion: boolean;
  updatedQuestion: boolean;
  addedTest: boolean;
  updatedTest: boolean
  questions = [];
  statuses = [
    {
      id: 1,
      status: 'Active'
    },
    {
      id: 0,
      status: 'Removed'
    },
    {
      id: 2,
      status: 'On Hold'
    }
  ];
  subject: any;

  que: any;
  ques: any[];

  // quizzes = [
  //   {
  //     test_id: 1,
  //     test_name: 'test1',
  //     test_key: 'test12283',
  //     test_time: 100,
  //     mark_per_question: 2,
  //     total_question: 10,
  //     is_negative: 0,
  //     description: 'Javatpoint offers you a online test exams or quizzes to start with. You may play online tests on Java, Servlet, JSP, SQL, OCJP, OCWCD, Android, Struts 2 etc. subjects.\r\n\r\nWe provide 100% assurance to clear OCJP and OCWCD Certification exams.\r\nThere are given practice test papers, so login is not required.\r\nYou may promote yourself and get points for each quiz. To do so, start playing belt series quizzes.',
  //     test_status: false
  //   },
  //   {
  //     test_id: 2,
  //     test_name: 'test2',
  //     test_key: 'test252283',
  //     test_time: 13,
  //     mark_per_question: 1,
  //     total_question: 30,
  //     is_negative: 1,
  //     description: 'Description 2',
  //     test_status: false
  //   },
  // ];
  // ques = [
  //   {
  //     answer: 'Sam',
  //     option1: 'Shaheer',
  //     option2: 'Arsalan',
  //     option3: 'Firoz',
  //     faculty_id: '1010',
  //     faculty_name: 'Shaheer Test',
  //     question: 'Name',
  //     questionStatus: '0',
  //     is_selected: false,
  //     questions_id: '1',
  //     status: '2',
  //     subject_id: '3',
  //     timestamp: '2019-09-12 11:00:49',
  //     user_id: '1010'
  //   },
  //   {
  //     answer: '10',
  //     option1: '3',
  //     option2: '5',
  //     option3: '7',
  //     faculty_id: '1010',
  //     faculty_name: 'Shaheer Test',
  //     question: 'Even',
  //     questionStatus: '0',
  //     is_selected: false,
  //     questions_id: '2',
  //     status: '1',
  //     subject_id: '3',
  //     timestamp: '2019-09-12 11:00:49',
  //     user_id: '1010'
  //   },
  //   {
  //     answer: '123',
  //     option1: '1',
  //     option2: '3',
  //     option3: '4',
  //     faculty_id: '1010',
  //     faculty_name: 'Shaheer Test',
  //     options: [{
  //       option: '1',
  //     },
  //     {
  //       option: '123',
  //     },
  //     {
  //       option: '3',
  //     },
  //     {
  //       option: '4',
  //     },
  //     ],
  //     question: 'largest',
  //     questionStatus: '0',
  //     _s: false,
  //     questions_id: '3',
  //     status: '1',
  //     subject_id: '3',
  //     timestamp: '2019-09-12 11:01:00',
  //     user_id: '1010',
  //   },
  // ];
  test: any;
  tests: any[];

  // tests = [
  //   {
  //     description: 'example test',
  //     is_negative: '0',
  //     mark_per_question: '1',
  //     status: '1',
  //     statusv: 'Opened',
  //     subject: 'General, English',
  //     test_id: '1',
  //     test_key: 'Exa357',
  //     test_name: 'Example',
  //     test_time: '100',
  //     total_mark: 1,
  //     total_question: '1'
  //   },
  //   {
  //     description: 'test details',
  //     is_negative: '1',
  //     mark_per_question: '1',
  //     status: '1',
  //     statusv: 'Opened',
  //     subject: 'General',
  //     test_id: '2',
  //     test_key: 'tes516',
  //     test_name: 'test',
  //     test_time: '100',
  //     total_mark: 2,
  //     total_question: '2'
  //   },
  // ];
  result: any;
  results = [
    {
      attended: '2',
      correct: '2',
      exam_id: '9',
      id: '1010',
      mark: '2',
      name: 'Shaheer Test (Staff)',
      percentage: 100,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',

      detailed_results: [
        {
          answer: '4',
          exam_id: '9',
          is_true: '1',
          question: 'large',
          question_id: '3',
          std_answer: '4',
        }, {
          answer: '1',
          exam_id: '9',
          is_true: '1',
          question: 'small',
          question_id: '4',
          std_answer: '1'
        }
      ],
      wrong: '0',
    },
    {
      attended: '0',
      correct: '0',
      exam_id: '8',
      id: '1010',
      mark: '0',
      name: 'Shaheer Test (Staff)',
      percentage: 0,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',
      detailed_results: [
        {
          answer: '4',
          exam_id: '8',
          is_true: '2',
          question: 'large',
          question_id: '3',
          std_answer: null
        },
        {
          answer: '1',
          exam_id: '8',
          is_true: '2',
          question: 'small',
          question_id: '4',
          std_answer: null
        }
      ],
      wrong: '0'
    },
    {
      attended: '2',
      correct: '1',
      exam_id: '4',
      id: '1010',
      mark: '0',
      name: 'Shaheer Test (Staff)',
      percentage: 0,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',
      detailed_results: [
        {
          answer: '4',
          exam_id: '7',
          is_true: '1',
          question: 'large',
          question_id: '3',
          std_answer: '4'
        },
        {
          answer: '1',
          exam_id: '4',
          is_true: '0',
          question: 'small',
          question_id: '4',
          std_answer: '4'
        }
      ],
      wrong: '1'
    }
  ];
  report: any;
  reports = [
    {
      attended: '2',
      correct: '2',
      exam_id: '9',
      mark: '2',
      percentage: 100,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',
      wrong: '0'
    },
    {
      attended: '0',
      correct: '0',
      exam_id: '8',
      mark: '0',
      percentage: 0,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',
      wrong: '0'
    },
    {
      attended: '2',
      correct: '2',
      exam_id: '7',
      mark: '2',
      percentage: 100,
      test_id: '2',
      test_name: 'test',
      total_mark: 2,
      total_question: '2',
      wrong: '0'
    },
  ];

  quiz_subjects: any;
  add_test: any[];
  resultSelectedType: any;
  resultSelectedTest: any;
  subjects: any[];

  constructor(private _formBuilder: FormBuilder, private quizservice: QuizService, private message: MessageService) { }

  ngOnInit() {

    this.resultSelectedType = "All";
    this.quizservice.getAllTest().subscribe(res => {
      console.log(res);
      this.tests = res.quiz_test_details;
    });
    this.quizservice.getQuizSubjects().subscribe(res => {
      console.log(res);
      this.subjects = res.quiz_subjects;
      this.selectedSubject = res.quiz_subjects[0];
      console.log(this.subjects);
      this.quizservice.getQuestions(this.selectedSubject.subject_id).subscribe(res => {
        console.log(res);
        this.ques = res.quiz_questions;
      });
    });


    this.quizservice.getActiveQuiz().subscribe(res => {
      console.log(res);
      this.quiz_info = res.quiz_details;
    });
    this.addQuestionForm = this._formBuilder.group({
      subject_id: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      option_1: ['', Validators.required],
      option_2: ['',],
      option_3: ['',],
    });
    this.editQuestionForm = this._formBuilder.group({
      subject_id: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      option_1: ['', Validators.required],
      option_2: ['',],
      option_3: ['',],
      qstatus: [''],
      questions_id: [''],
    });
    this.addSubjectForm = this._formBuilder.group({
      subject: ['', Validators.required],
    });
    this.resultSelectForm = this._formBuilder.group({
      select_subject: [''],
    });
    this.addTestForm = this._formBuilder.group({
      test_name: ['', Validators.required],
      mark_per_question: ['', Validators.required],
      total_question: ['', Validators.required],
      total_mark: [''],
      test_time: ['', Validators.required],
      is_negative: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
      quiz_subjects: this._formBuilder.array([])
    });
    this.editTestForm = this._formBuilder.group({
      test_name: ['', Validators.required],
      mark_per_question: ['', Validators.required],
      total_question: ['', Validators.required],
      total_mark: [''],
      test_time: ['', Validators.required],
      is_negative: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
      test_id: [''],
      quiz_subjects: this._formBuilder.array([])
    });
  }

  onSelectSubject($event) {
    console.log("subject selected", this.selectedSubject);
    this.quizservice.getQuestions(this.selectedSubject.subject_id).subscribe(res => {
      console.log(res);
      this.ques = res.quiz_questions;
    });    
    // this.quizservice.getQuestions(this.selectedSubject).subscribe((data: any) => {
    //   this.questions=data;
    //   console.log(this.questions);
    // });
  }
  onAddQueModal() {
    this.addQuestionForm.patchValue({
      subject_id: this.selectedSubject.subject_id,

    })

  }

  onEditQuestion(edittable) {
    this.editQuestionForm.patchValue({
      subject_id: edittable.subject_id,
      question: edittable.question,
      answer: edittable.answer,
      option_1: edittable.option_1,
      option_2: edittable.option_2,
      option_3: edittable.option_3,
      qstatus: edittable.status,
      questions_id: edittable.questions_id
    })
    this.edittable = edittable;

  }
  onEditTests(edittest, quiz_subjects) {
    this.editTestForm.patchValue({
      test_id: edittest.test_id,
      test_name: edittest.test_name,
      mark_per_question: edittest.mark_per_question,
      total_question: edittest.total_question,
      total_mark: edittest.total_mark,
      is_negative: edittest.is_negative,
      status: edittest.status,
      test_time: edittest.test_time,
      description: edittest.description,
    })
    const checkArray = <FormArray>this.editTestForm.get(quiz_subjects);
    // console.log(checkArray);
    // if (checkArray.length != 0) {
    //   checkArray.clear();
    // }
    this.subjects.filter(sub => {
      if (edittest.subjects.some(subject => subject.id === sub.id)) {
        checkArray.push(new FormControl({ subject_id: sub.id }));
        sub.is_selected = true;
      } else {
        sub.is_selected = true;
      }
    })
    this.edittest = edittest;
  }
  onResultView(editresult) {
    this.editresult = editresult;
  }
  onAddSubject() {
    console.log("Add Subject Button Clicked");
    console.log(this.addSubjectForm);
    $('#subselectModal').modal('hide');
    if (this.addSubjectForm.invalid) {
      return;
    } else {
      this.quizservice.addSubject(this.addSubjectForm.value)
        .subscribe(success => {
          if (success) {
            // this.message.showNotification('success', 'Subject Added Successfully');
            console.log(success);
          } else {
            // this.message.showNotification('danger', 'Enter Details Correctly');
          }
        });
    }
  }
  onAddQuestion() {
    console.log(this.addQuestionForm.value);
    if (this.addQuestionForm.invalid) {
      return;
    } else {
      this.quizservice.addQuestion(this.addQuestionForm.value)
        .subscribe(success => {
          if (success) {
            this.timer = 4;
            this.addQuestionForm.reset();
            this.interval = setInterval(() => {
              this.timer--;
              this.addedQuestion = true;
              if (this.timer < 0) {
                this.addedQuestion = false;
                clearInterval(this.interval);
                console.log("notification timer stopped");
              }
            }, 1000);
            // this.message.showNotification('success', 'Question Added Successfully');
            // console.log(success);
          } else {
            // this.message.showNotification('danger', 'Enter Details Correctly');
          }
        });
      console.log("Add Question Button Clicked");
    }
  }
  onUpdateQuestion($event) {
    console.log(this.editQuestionForm.value);
    if (this.editQuestionForm.invalid) {
      return;
    } else {
      this.quizservice.updateQuestion(this.editQuestionForm.value)
        .subscribe(success => {
          console.log(success);
          if (success) {
            this.timer = 2;
            this.interval = setInterval(() => {
              this.timer--;
              this.updatedQuestion = true;
              if (this.timer < 0) {
                this.updatedQuestion = false;
                clearInterval(this.interval);
                console.log("notification timer stopped");
              }
            }, 1000);
            // this.message.showNotification('success', 'Question Updated Successfully');
            // console.log(success);
          } else {
            // this.message.showNotification('danger', 'Enter Details Correctly');
          }
        });
      console.log("Update Question Button Clicked", $event);
    }
  }
  updateCheckBoxArray(check, $event, key) {
    const checkArray = <FormArray>this.addTestForm.get(key);
    console.log($event.checked);
    // console.log(checkArray);

    if ($event.checked) {
      if (checkArray.controls.findIndex(x => x.value == check.id) == -1)
        checkArray.push(new FormControl({ subject_id: check.subject_id }));
      check.is_selected = true;
    } else {
      let idx = checkArray.controls.findIndex(x => x.value == check.id);
      check.is_selected = false;
      checkArray.removeAt(idx);
    }
    this.quiz_subjects = checkArray.value;
    console.log(this.quiz_subjects);
    console.log(this.addTestForm.value);
  }
  selectAll(check, $event, key) {
    console.log($event.checked);
    const checkArray = <FormArray>this.addTestForm.get(key);
    if ($event.checked) {
      if (checkArray.length != 0) {
        checkArray.clear();
      }
      // checkArray.clear();
      for (check of this.subjects) {
        if (checkArray.controls.findIndex(x => x.value == check.id) == -1) {
          checkArray.push(new FormControl({ subject_id: check.subject_id }));
          check.is_selected = true;
        }
      }
      console.log(this.addTestForm.value);
    }
    else {
      checkArray.clear();
      for (check of this.subjects) {
        check.is_selected = false;
      }
    }
  }
  onAddTest() {
    console.log(this.addTestForm.value);
    if (this.addTestForm.invalid) {
      return;
    } else {
      this.quizservice.addTest(this.addTestForm.value)
        .subscribe(success => {
          console.log(success);
          if (success) {
            this.timer = 4;
            this.addTestForm.reset();
            this.interval = setInterval(() => {
              this.timer--;
              this.addedTest = true;
              if (this.timer < 0) {
                this.addedTest = false;
                clearInterval(this.interval);
                console.log("notification timer stopped");
              }
            }, 1000);
            // this.message.showNotification('success', 'Test Added Successfully');
            // console.log(success);
          } else {
            // this.message.showNotification('danger', 'Enter Test Details Correctly');
          }
        });
      console.log("Add Test Button Clicked");
    }

  }
  onupdateCheckBoxArray(check, $event, key) {
    const checkArray = <FormArray>this.editTestForm.get(key);
    console.log($event.checked);
    // console.log(checkArray);

    if ($event.checked) {
      if (checkArray.controls.findIndex(x => x.value == check.id) == -1)
        checkArray.push(new FormControl({ subject_id: check.subject_id }));
      check.is_selected = true;
    } else {
      let idx = checkArray.controls.findIndex(x => x.value == check.id);
      check.is_selected = false;
      checkArray.removeAt(idx);
    }
    this.quiz_subjects = checkArray.value;
    console.log(this.quiz_subjects);
    console.log(this.editTestForm.value);
  }
  onselectAll(check, $event, key) {
    console.log($event.checked);
    const checkArray = <FormArray>this.editTestForm.get(key);
    if ($event.checked) {
      if (checkArray.length != 0) {
        checkArray.clear();
      }
      // checkArray.clear();
      for (check of this.subjects) {
        if (checkArray.controls.findIndex(x => x.value == check.id) == -1) {
          checkArray.push(new FormControl({ subject_id: check.subject_id }));
          check.is_selected = true;
        }
      }
      console.log(this.editTestForm.value);
    }
    else {
      checkArray.clear();
      for (check of this.subjects) {
        check.is_selected = false;
      }
    }
  }

  onUpdateTest() {
    console.log(this.editTestForm.value);
    if (this.editTestForm.invalid) {
      return;
    } else {
      this.quizservice.updateTest(this.editTestForm.value)
        .subscribe(success => {
          console.log(success);
          if (success) {
            this.timer = 4;
            this.interval = setInterval(() => {
              this.timer--;
              this.updatedTest = true;
              if (this.timer < 0) {
                this.updatedTest = false;
                clearInterval(this.interval);
                console.log("notification timer stopped");
              }
            }, 1000);
            // this.message.showNotification('success', 'Test Updated Successfully');
            // console.log(success);
          } else {
            // this.message.showNotification('danger', 'Enter Test Details Correctly');
          }
        });
      console.log("Update Question Button Clicked");
    }
  }


  onResultSelectTest() {
    console.log("Test selected", this.resultSelectedTest);
    // this.quizservice.getQuestions(this.selectedSubject).subscribe((data: any) => {
    //   this.questions=data;
    //   console.log(this.questions);
    // });
  }
  onResultSelectType() {
    console.log("Type selected", this.resultSelectedType);
    // this.quizservice.getQuestions(this.selectedSubject).subscribe((data: any) => {
    //   this.questions=data;
    //   console.log(this.questions);
    // });
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