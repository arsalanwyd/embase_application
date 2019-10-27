import { Component, OnInit } from '@angular/core';
import { Table } from './test';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.scss']
})
export class RemittanceComponent implements OnInit {
  TABLES: Table[] = [
    { date: '02/12/2019', challanNo: 39, adminNo: 909, name: 'Alishan Ummer', course: 'BCA', ledger: 'REG', amount: 10000, mode: 'Cash' },
    { date: '02/02/2019', challanNo: 40, adminNo: 910, name: 'Something', course: 'BBA', ledger: 'REG', amount: 15000, mode: 'Cash' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
