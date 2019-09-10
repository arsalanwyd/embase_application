import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Books',  icon: 'collections_bookmark', class: '' },
    { path: '/addBooks', title: 'Add Book',  icon: 'post_add', class: '' },
    { path: '/issuebook', title: 'Issue Book',  icon: 'content_paste', class: '' },
    { path: '/transactions', title: 'Transactions',  icon: 'transfer_within_a_station', class: '' },
    { path: '/staff-home', title: 'Staff Home',  icon: 'home', class: '' },
   // { path: '/students', title: 'Students',  icon: 'group', class: '' },
    { path: '/attendance', title: 'Attendance',  icon: 'spellcheck', class: '' },
    { path: '/attendance-report', title: 'Attendance Report',  icon: 'report', class: '' },
    { path: '/leave', title: 'Leave',  icon: 'work_off', class: '' },
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

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
