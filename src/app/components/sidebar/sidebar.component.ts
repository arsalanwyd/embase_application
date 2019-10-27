import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'app/auth/authservice.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/nnnnnnn', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/settings', title: 'Settings', icon: 'settings_applications', class: '' },
  { path: '/user-registration', title: 'User Registration',  icon: 'person_add', class: '' },
  { path: '/quiz', title: 'Mock Test', icon: 'help', class: '' },
  { path: '/sfs', title: 'Main Test', icon: 'assignment', class: '' },
  // { path: '/staff-report', title: 'Reports', icon: 'assessment', class: '' },  
  { path: '/dfnd', title: 'Reports', icon: 'assessment', class: '' },
  { path: '/cc', title: 'QMS', icon: 'question_answer', class: '' },
  { path: '/zz', title: 'Materials', icon: 'file_copy', class: '' },
  { path: '/aa', title: 'Books', icon: 'book', class: '' },



  // { path: '/nnnnnnn', title: 'Dashboard', icon: 'dashboard', class: '' },
  // { path: '/quiz', title: 'Mock Test', icon: 'help', class: '' },
  // { path: '/nnnnv', title: 'Main Test', icon: 'assignment', class: '' },
  // // { path: '/vvvv', title: 'Create Test', icon: 'note_add', class: '' },
  // { path: '/ccc', title: 'Result', icon: 'assessment', class: '' },
  // { path: '/cc', title: 'My Query', icon: 'message', class: '' },
  // { path: '/xx', title: 'Downloads', icon: 'save_alt', class: '' },
  // { path: '/zz', title: 'Materials', icon: 'file_copy', class: '' },
  // { path: '/aa', title: 'Books', icon: 'book', class: '' },         


  //{ path: '/super-home', title: 'Home', icon: 'home', class: '' },
  //{ path: '/super-students', title: 'Students', icon: 'person', class: '' },
  //{ path: '/super-attendance', title: 'Attendance', icon: 'spellcheck', class: '' },
  //{ path: '/remittance', title: 'Remittance', icon: 'money', class: '' },
  //{ path: '/remittance-verification', title: 'Remittance Verification', icon: 'verified_user', class: '' },
  //{ path: '/received-report', title: 'Received Report', icon: 'receipt', class: '' },
  //{ path: '/accounting', title: 'Accounting', icon: 'monetization_on', class: '' },
  //{ path: '/accounts-report', title: 'Accounts Report', icon: 'report_problem', class: '' },
  //{ path: '/transfer-certificate', title: 'Transfer Certificate', icon: 'exit_to_app', class: '' },

  //    { path: '/dashboard', title: 'Books',  icon: 'collections_bookmark', class: '' },
  //  { path: '/addBooks', title: 'Add Book',  icon: 'post_add', class: '' },
  //  { path: '/issuebook', title: 'Issue Book',  icon: 'content_paste', class: '' },
  //  { path: '/transactions', title: 'Transactions',  icon: 'transfer_within_a_station', class: '' },
  //    { path: '/staff-home', title: 'Staff Home',  icon: 'home', class: '' },
  // { path: '/students', title: 'Students',  icon: 'group', class: '' },
  //    { path: '/attendance', title: 'Attendance',  icon: 'spellcheck', class: '' },
  //   { path: '/attendance-report', title: 'Attendance Report',  icon: 'report', class: '' },
  //  { path: '/mark', title: 'Mark',  icon: 'edit', class: '' },
  //   { path: '/syllabus', title: 'Syllabus',  icon: 'bookmarks', class: '' },
  //   { path: '/certificates', title: 'Certificates',  icon: 'copyright', class: '' },
  //   { path: '/leave', title: 'Leave',  icon: 'work_off', class: '' },

  //   { path: '/club', title: 'Club',  icon: 'list', class: '' },
  //  { path: '/staff-books', title: 'Library',  icon: 'library_books', class: '' },
  // { path: '/test', title: 'Test',  icon: 'content_paste', class: '' },
  // { path: '/userProfile', title: 'user Profile',  icon: 'post_add', class: '' },
  // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router, private authservice: AuthserviceService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  logout() {
    this.authservice.logout().subscribe(success => {
      if (success) {
        this.router.navigate((['/auth']));
      }
      else {
        alert("Something Went Wrong");
        this.router.navigate((['/auth']));
      }
    });
  }
}
