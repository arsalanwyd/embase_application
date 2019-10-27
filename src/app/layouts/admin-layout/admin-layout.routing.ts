import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RandomGuard } from 'app/guards/random.guard';
import { IssuebookComponent } from 'app/issuebook/issuebook.component';
import { TestComponent } from 'app/test/test.component';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { SampleComponent } from 'app/sample/sample.component';
import { AddBookComponent } from 'app/add-book/add-book.component';
import { StaffHomeComponent } from 'app/staff-home/staff-home.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';
import { StudentsComponent } from 'app/students/students.component';
import { LeaveComponent } from 'app/leave/leave.component';
import { AttendanceReportComponent } from 'app/attendance-report/attendance-report.component';
import { CertificatesComponent } from 'app/certificates/certificates.component';
import { QuizComponent } from 'app/quiz/quiz.component';
import { ClubComponent } from 'app/club/club.component';
import { StaffBooksComponent } from 'app/staff-books/staff-books.component';
import { MarkComponent } from 'app/mark/mark.component';
import { SyllabusComponent } from 'app/syllabus/syllabus.component';
import { SuperHomeComponent } from 'app/super-home/super-home.component';
import { SuperStudentsComponent } from 'app/super-students/super-students.component';
import { SuperAttendanceComponent } from 'app/super-attendance/super-attendance.component';
import { RemittanceComponent } from 'app/remittance/remittance.component';
import { RemittanceVerificationComponent } from 'app/remittance-verification/remittance-verification.component';
import { ReceivedReportComponent } from 'app/received-report/received-report.component';
import { AccountingComponent } from 'app/accounting/accounting.component';
import { AccountsReportComponent } from 'app/accounts-report/accounts-report.component';
import { TransferCertificateComponent } from 'app/transfer-certificate/transfer-certificate.component';
import { StaffQuizComponent } from 'app/staff-quiz/staff-quiz.component';
import { UserRegistrationComponent } from 'app/user-registration/user-registration.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent  },
    { path: 'addBooks',       component: AddBookComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'issuebook',     component: IssuebookComponent  },
    { path: 'transactions',  component: TransactionsComponent  },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'test',  component: TestComponent },
    { path: 'sample',  component: SampleComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'userProfile',       component: UserProfileComponent },
    { path: 'staff-home',       component: StaffHomeComponent },
    { path: 'staff-quiz',       component: StaffQuizComponent },
    { path: 'students',       component: StudentsComponent },
    { path: 'mark',       component: MarkComponent },
    { path: 'syllabus',       component: SyllabusComponent },
    { path: 'attendance',       component: AttendanceComponent },
    { path: 'attendance-report',       component: AttendanceReportComponent },
    { path: 'certificates',       component: CertificatesComponent },   
    { path: 'leave',       component: LeaveComponent },
    { path: 'quiz',       component: QuizComponent },
    { path: 'user-registration',       component: UserRegistrationComponent },
    { path: 'club',       component: ClubComponent },
    { path: 'staff-books',       component: StaffBooksComponent },
    { path: 'super-home',       component: SuperHomeComponent },
    { path: 'super-students',       component: SuperStudentsComponent },
    { path: 'super-attendance',       component: SuperAttendanceComponent },
    { path: 'remittance',       component: RemittanceComponent },
    { path: 'remittance-verification',       component: RemittanceVerificationComponent },
    { path: 'received-report',       component: ReceivedReportComponent },
    { path: 'accounting',       component: AccountingComponent },
    { path: 'accounts-report',       component: AccountsReportComponent },
    { path: 'transfer-certificate',       component: TransferCertificateComponent },

];
