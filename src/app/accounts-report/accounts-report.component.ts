import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-report',
  templateUrl: './accounts-report.component.html',
  styleUrls: ['./accounts-report.component.scss']
})
export class AccountsReportComponent implements OnInit {
  today: number = Date.now();
  time = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
