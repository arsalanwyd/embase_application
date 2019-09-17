import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StudentService } from 'app/services/student.service';

@Component({
  selector: 'app-student-books',
  templateUrl: './student-books.component.html',
  styleUrls: ['./student-books.component.scss']
})
export class StudentBooksComponent implements OnInit {
  displayedColumns: string[] = ['book_no', 'book_name', 'book_author', 'book_category', 'status'];
  booklist: MatTableDataSource<any>;
  bookinhand: any;
  readlist: any;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort, {static: false})sort: MatSort;
  constructor(private studentservice: StudentService) { }

  ngOnInit() {
    this.studentservice.getBookList().subscribe((res: any) => {
      console.log(res.books);
      this.booklist = new MatTableDataSource(res.books);
      this.booklist.sort = this.sort;
      this.booklist.paginator = this.paginator;
    });
    this.studentservice.getLibraryHistory().subscribe((result: any) => {
      console.log(result);
      this.bookinhand = result.booksINhand;
      this.readlist = result.books;
    });
  }
  applyFilter(filterValue: string) {
    this.booklist.filter = filterValue.trim().toLowerCase();
   console.log(this.booklist);
  }

}
