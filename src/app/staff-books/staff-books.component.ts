import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StaffService } from 'app/services/staff.service';

@Component({
  selector: 'app-staff-books',
  templateUrl: './staff-books.component.html',
  styleUrls: ['./staff-books.component.scss']
})
export class StaffBooksComponent implements OnInit {
  displayedColumns: string[] = ['book_no', 'book_name', 'book_author', 'book_category', 'status'];
  booklist: MatTableDataSource<any>;
  bookinhand: any;
  readlist: any; 
  book: any;
  books: [
    {
        'book_no': 1984,
        'book_name': 'Gayathri',
        'book_author': 'P Valsala',
        'book_price': '240.00',
        'book_category': 'Malayalam',
        'position': '1',
        'status': 1,
        'return_status': 'Not Available'
    },
    {
        'book_no': 1,
        'book_name': 'Oxford Advance Learners Dictionary',
        'book_author': 'A S Hornby',
        'book_price': '585.00',
        'book_category': 'English',
        'position': '1',
        'status': 1
        'return_status': 'Available'
    },
    {
        'book_no': 2162,
        'book_name': 'snakeand mirror',
        'book_author': 'story',
        'book_price': '25.00',
        'book_category': 'Computer Science',
        'position': '1',
        'status': 1,
        'return_status': 'Available'
    }
];
booksINhand : [
  {
      'issue_slno': 847,
      'book_no': 1001,
      'std_admissionnumber': 784,
      'user_id': 0,
      'issue_date': '2018-07-12',
      'return_status': 'NO',
      'issue_book_timestamp': '2018-07-12 15:45:13',
      'book_name': 'Kadeesuvinte Lokam',
      'book_author': 'Fakeer Muhammed Kadpadi',
      'book_price': '90.00',
      'book_category': 'Malayalam',
      'position': '1',
      'status': 1
  },
  {
      'issue_slno': 863,
      'book_no': 420,
      'std_admissionnumber': 784,
      'user_id': 0,
      'issue_date': '2018-07-18',
      'return_status': 'NO',
      'issue_book_timestamp': '2018-07-18 10:57:46',
      'book_name': 'Asuravith',
      'book_author': 'M T Vasudhevan Nair',
      'book_price': '140.00',
      'book_category': 'Malayalam',
      'position': '1',
      'status': 1
  }
];
booksHistory : [
  {
      'issue_slno': 851,
      'book_no': 3,
      'std_admissionnumber': 784,
      'user_id': 0,
      'issue_date': '2018-07-13',
      'return_status': 'YES',
      'issue_book_timestamp': '2018-07-13 15:19:53',
      'book_name': 'Skills In Mathematics Algebra Vol-1',
      'book_author': 'S K Goyal',
      'book_price': null,
      'book_category': 'Maths',
      'position': '1',
      'status': 1
  }
];
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort, {static: false})sort: MatSort;
  constructor(private staffservice: StaffService) { }


  ngOnInit() {
   this.staffservice.getBookList().subscribe((res: any) => {
      console.log(res.books);
      this.booklist = new MatTableDataSource(res.books);
      this.booklist.sort = this.sort;
      this.booklist.paginator = this.paginator;
    }
    );
    this.staffservice.getLibraryHistory().subscribe((result: any) => {
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
