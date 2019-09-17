import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedOption: string;
  options: string[] = ['1', '2', '3', '4'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
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
  question: any;
  questions = [
    {
      answer: "1",
      faculty_id: "1010",
      faculty_name: "Shaheer Test",
      option_1: "32",
      option_2: "3",
      option_3: "4",
      question: "Asfdhcjg",
      questions_id: "1",
      status: "1",
      subject_id: "3",
      timestamp: "2019-09-12 11:00:49",
      user_id: "1010"
    },
    {
      answer: "123",
      faculty_id: "1010",
      faculty_name: "Shaheer Test",
      option_1: "1",
      option_2: "2",
      option_3: "3",
      question: "largest",
      questions_id: "2",
      status: "1",
      subject_id: "3",
      timestamp: "2019-09-12 11:01:00",
      user_id: "1010",
    },
  ];
  test: any;
  tests = [
    {
      description: "example test",
      is_negative: "0",
      mark_per_question: "1",
      status: "1",
      statusv: "Opened",
      subject: "General, English",
      test_id: "1",
      test_key: "Exa357",
      test_name: "Example",
      test_time: "100",
      total_mark: 1,
      total_question: "1"
    },
    {
      description: "test details",
      is_negative: "1",
      mark_per_question: "1",
      status: "1",
      statusv: "Opened",
      subject: "General",
      test_id: "2",
      test_key: "tes516",
      test_name: "test",
      test_time: "100",
      total_mark: 2,
      total_question: "2"
    },
  ];
  result: any;
  results = [
    {
      attended: "2",
      correct: "2",
      exam_id: "9",
      id: "1010",
      mark: "2",
      name: "Shaheer Test (Staff)",
      percentage: 100,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
    },
    {
      attended: "0",
      correct: "0",
      exam_id: "8",
      id: "1010",
      mark: "0",
      name: "Shaheer Test (Staff)",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
    },
    {
      attended: "2",
      correct: "2",
      exam_id: "7",
      id: "1010",
      mark: "2",
      name: "Shaheer Test (Staff)",
      percentage: 100,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
    },
    {
      attended: "0",
      correct: "0",
      exam_id: "6",
      id: "1010",
      mark: "0",
      name: "Shaheer Test (Staff)",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
    },
    {
      attended: "0",
      correct: "0",
      exam_id: "5",
      id: "1010",
      mark: "0",
      name: "Shaheer Test (Staff)",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
    },
    {
      attended: "2",
      correct: "1",
      exam_id: "4",
      id: "1010",
      mark: "0",
      name: "Shaheer Test (Staff)",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "1"
    },
  ];
  report: any;
  reports = [
    {
      attended: "2",
      correct: "2",
      exam_id: "9",
      mark: "2",
      percentage: 100,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
      },
      {
      attended: "0",
      correct: "0",
      exam_id: "8",
      mark: "0",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
      },
      {
      attended: "2",
      correct: "2",
      exam_id: "7",
      mark: "2",
      percentage: 100,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
      },
      {
      attended: "0",
      correct: "0",
      exam_id: "6",
      mark: "0",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0",
      },
      {
      attended: "0",
      correct: "0",
      exam_id: "5",
      mark: "0",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "0"
      },
      {
      attended: "2",
      correct: "1",
      exam_id: "4",
      mark: "0",
      percentage: 0,
      test_id: "2",
      test_name: "test",
      total_mark: 2,
      total_question: "2",
      wrong: "1"
      },
      {
      attended: "1",
      correct: "1",
      exam_id: "3",
      mark: "1",
      percentage: 100,
      test_id: "1",
      test_name: "Example",
      total_mark: 1,
      total_question: "1",
      wrong: "0"
      },
  ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}



