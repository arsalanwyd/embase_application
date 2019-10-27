import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/services/quiz.service';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'app-staff-report',
  templateUrl: './staff-report.component.html',
  styleUrls: ['./staff-report.component.scss']
})
export class StaffReportComponent implements OnInit {

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
  quiz_info: any;
  result_test: any;
  resultSelectedType: any;
  resultSelectedTest: any;
  editresult: any;


  constructor(private quizservice: QuizService, private message: MessageService) { }

  ngOnInit() {
    this.resultSelectedType = "All";
    this.quizservice.getActiveQuiz().subscribe(res => {
      console.log(res);
      this.quiz_info = res.quiz_details;
    });
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
  onResultView(editresult) {
    this.editresult = editresult;
  }

}
