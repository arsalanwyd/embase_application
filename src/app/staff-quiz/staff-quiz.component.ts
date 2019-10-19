import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';
import { QuizService } from 'app/services/quiz.service';
import { timer } from 'rxjs';
declare var $: any

@Component({
  selector: 'app-staff-quiz',
  templateUrl: './staff-quiz.component.html',
  styleUrls: ['./staff-quiz.component.scss']
})
export class StaffQuizComponent implements OnInit {

  quiz_details = [];
  quiz: any;
  quest: string;
  answ: string;
  currentQuiz: any;
  ansList = [];
  timerAlert = false;
  timeLeft: number = 1000;
  interval;
  complete = false;
  OK = false;
  startQuiz = false;
  selectedOption: any;
  isAnswered = false;
  selectedSubject;
  addSubjectForm: FormGroup;
  addQuestionForm: FormGroup;
  subjectForm: FormGroup;
  updateQuestionForm: FormGroup;
  updateTestForm: FormGroup;
  addTestForm: FormGroup;
  quizForm: FormGroup;
  edittable: any;
  edittest: any;

  answeredOption = [];
  editresult: any;
  editquiz: any;
  questions = [];
  status: string[] = ['Active', 'Removed', 'On Hold'];
  subject: any;
  subjects = [{
    is_selected: false,
    subject: "English",
    subject_id: "3"
  },
  {
    is_selected: false,
    subject: "General",
    subject_id: "1"
  },
  {
    is_selected: false,
    subject: "hindi",
    subject_id: "4"
  },
  {
    is_selected: false,
    subject: "Malayalam",
    subject_id: "2"
  },
  ];
  que: any;
  index: number = 0;
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
  ques = [
    {
      answer: 'Sam',
      option1: 'Shaheer',
      option2: 'Arsalan',
      option3: 'Firoz',
      faculty_id: '1010',
      faculty_name: 'Shaheer Test',
      options: [
        {
          option: 'Sam',
        },
        {
          option: 'Shaheer',
        },
        {
          option: 'Arsalan',
        },
        {
          option: 'Firoz',
        },
      ],
      question: 'Name',
      questionStatus: '0',
      isSelected: false,
      questions_id: '1',
      status: '1',
      subject_id: '3',
      timestamp: '2019-09-12 11:00:49',
      user_id: '1010'
    },
    {
      answer: '10',
      option1: '3',
      option2: '5',
      option3: '7',
      faculty_id: '1010',
      faculty_name: 'Shaheer Test',
      options: [
        {
          option: '3',
        },
        {
          option: '5',
        },
        {
          option: '7',
        },
        {
          option: '10',
        },
      ],
      question: 'Even',
      questionStatus: '0',
      isSelected: false,
      questions_id: '2',
      status: '1',
      subject_id: '3',
      timestamp: '2019-09-12 11:00:49',
      user_id: '1010'
    },
    {
      answer: '123',
      option1: '1',
      option2: '3',
      option3: '4',
      faculty_id: '1010',
      faculty_name: 'Shaheer Test',
      options: [{
        option: '1',
      },
      {
        option: '123',
      },
      {
        option: '3',
      },
      {
        option: '4',
      },
      ],
      question: 'largest',
      questionStatus: '0',
      isSelected: false,
      questions_id: '3',
      status: '1',
      subject_id: '3',
      timestamp: '2019-09-12 11:01:00',
      user_id: '1010',
    },
  ];
  test: any;
  tests = [
    {
      description: 'example test',
      is_negative: '0',
      mark_per_question: '1',
      status: '1',
      statusv: 'Opened',
      subject: 'General, English',
      test_id: '1',
      test_key: 'Exa357',
      test_name: 'Example',
      test_time: '100',
      total_mark: 1,
      total_question: '1'
    },
    {
      description: 'test details',
      is_negative: '1',
      mark_per_question: '1',
      status: '1',
      statusv: 'Opened',
      subject: 'General',
      test_id: '2',
      test_key: 'tes516',
      test_name: 'test',
      test_time: '100',
      total_mark: 2,
      total_question: '2'
    },
  ];
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

  constructor(private _formBuilder: FormBuilder, private quizservice: QuizService) { }

  ngOnInit() {
    this.quizservice.getActiveQuiz().subscribe(res => {
      console.log(res);
      this.quiz_details = res.quiz_details;
    });
    this.addQuestionForm = this._formBuilder.group({
      subject_list: ['', Validators.required],
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: [''],
      option4: [''],
      qstatus: ['']
    });
    this.addSubjectForm = this._formBuilder.group({
      subjectName: ['', Validators.required],
    });
    this.subjectForm = this._formBuilder.group({
      select_subject: [''],
    });
    this.addTestForm = this._formBuilder.group({
      test_name: ['', Validators.required],
      mark_per_question: ['', Validators.required],
      no_of_questions: ['', Validators.required],
      maximum_mark: ['', Validators.required],
      maximum_time: ['', Validators.required],
      wrong_answer_mark: ['', Validators.required],
      test_details: ['', Validators.required],
      tstatus: [''],
      sublist: this._formBuilder.array([])
    });
  }

  onEditQuestion(edittable) {
    this.addQuestionForm.patchValue({
      question: edittable.question,
      option1: edittable.answer,
      option2: edittable.option1,
      option3: edittable.option2,
      option4: edittable.option3,
    })
    this.edittable = edittable;

  }
  onEditTest(edittest) {
    this.addTestForm.patchValue({
      test_name: edittest.test_name,
      mark_per_question: edittest.mark_per_question,
      no_of_questions: edittest.total_question,
      maximum_mark: edittest.total_mark,
      wrong_answer_mark: edittest.is_negative,
      tstatusv: edittest.statusv,
      test_details: edittest.description,
    })
    this.edittest = edittest;
  }
  onResultView(editresult) {
    this.editresult = editresult;

  }
  onAddTest(){
    
  }

  onAddSubject() {
    console.log("Add Subject Button Clicked");
    $('#subselectModal').modal('hide');
  }
  onAddQuestion() {
    console.log("Add Question Button Clicked");
    this.addQuestionForm.reset();
  }
  onUpdateQuestion($event) {
    console.log("Update Question Button Clicked", $event);
  }
  updateCheckBoxArray(check, isChecked, key) {
    const checkArray = <FormArray>this.addTestForm.get(key);
    if (isChecked) {
      if (checkArray.controls.findIndex(x => x.value == check.id) == -1)
        checkArray.push(new FormControl({ id: check.id, subject_name: check.subject_name }));
    } else {
      let idx = checkArray.controls.findIndex(x => x.value == check.id);
      checkArray.removeAt(idx);
    }
    console.log(this.addTestForm.value);
  }
  selectAll(isChecked, key) {
    // const checkArray = <FormArray>this.addTestForm.get(key);
    // if (isChecked) {
    //   for (var subject of this.subjects) {
    //     checkArray.push(new FormControl({ id: subject.subject_id, subject_name: subject.subject }));
    //   }
    // }
    // checkArray.reset();

  }
  onOK($event, test_key) {
    this.OK = true;
    this.quizservice.getQuiz(test_key).subscribe((data: any) => {
      this.quiz = data;
      // this.questions = data.quiz_details;
      console.log(data);
      // console.log(this.questions);
    });
    console.log("OK Button Pressed", $event);
    this.currentQuiz = test_key;
    console.log(this.currentQuiz);
  }
  onGoBack($event) {
    this.OK = false;
    console.log("Go Back Pressed");
  }


  onstartTimer($event, test_time, test_key) {
    this.startQuiz = true;
    //var currentDate = new Date();
    //var timestamp=new Date().getTime();
   //var timestamp = new Date().toISOString();
   // this.quiz.quiz['start_time'] = timestamp;
   this.quiz.quiz['start_time'] = "2018-10-13 20:15:48";
    console.log("Timer started", $event);
    // this.timeLeft = test_time;
   // console.log(timestamp);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        if (this.complete === false) {
          this.complete = true;
          this.timerAlert = true;
          console.log(this.quiz);
        }
      }
    }, 1000);
  }
  onOptionClick($event) {
    this.quiz.quiz_details[this.index].is_selected = true;
    console.log("Option Clicked", $event);
    this.answeredOption[this.index] = $event.value;
    console.log(this.answeredOption);
    // this.ques[index].isSelected = true;

    //$event.value.isSelected = true;   
  }
  onSaveAndNextButtonClicked($event) {

    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '1';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    console.log("Submitted Option", $event);
    console.log(this.ansList);
  }
  onSaveButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '1';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    console.log(this.ansList);
  }
  onMarkForReviewAndNextButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '2';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    console.log(this.ansList);
  }
  onMarkForReviewButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '2';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    console.log(this.ansList);
  }
  onSaveAndMarkForReviewButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '3';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
      this.index++;
    }
    console.log(this.ansList);
  }
  onSaveAndMarkForReviewLastButtonClicked($event) {
    if (this.quiz.quiz_details[this.index].is_selected === true) {
      this.quiz.quiz_details[this.index].status = '3';
      this.ansList[this.index] = new Array(this.answeredOption[this.index], this.quiz.quiz_details[this.index].status);
      this.quiz.quiz_details[this.index].std_answer = this.answeredOption[this.index];
    }
    console.log(this.ansList);
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
  onComplete($event) {
    //this.ansList[this.index] = new Array(this.selectedOption, this.ques[this.index].questionStatus);
    this.complete = true;
    this.timeLeft = 0;
    $('#confirmationModal').modal('hide');
    this.quiz.quiz['std_admissionnumber'] = 1018;
    this.quiz.quiz['user_type'] = 2;
    console.log(this.quiz);
    this.quizservice.submitQuiz(this.quiz).subscribe(res => {
      console.log(res);
    },error=>{
      console.log(error.error.message);
    });
    console.log("Completed", $event);
    //console.log(this.ansList);

  }
  onSelectSubject($event) {
    console.log("Select Subject", $event);
  }
}
