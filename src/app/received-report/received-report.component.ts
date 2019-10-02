import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-report',
  templateUrl: './received-report.component.html',
  styleUrls: ['./received-report.component.scss']
})
export class ReceivedReportComponent implements OnInit {
  openRow = false;
  //closeRow = true;
  openRowBatchWise = false;

  constructor() { }

  ngOnInit() {
  }
  onTableRowClick($event) {
    this.openRow = true;
    //this.closeRow = false;
    console.log("Table row clicked", $event);
  }
  onTableRowBatchWiseClick($event) {
    this.openRowBatchWise = true;
    console.log("Table row Batch Wise clicked", $event);
  }

}
