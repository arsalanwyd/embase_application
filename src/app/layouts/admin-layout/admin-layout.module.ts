import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { IssuebookComponent } from 'app/issuebook/issuebook.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatBadgeModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatStepperModule,
  MatProgressBarModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDatepickerModule,
} from '@angular/material';
import { TokenInterceptor } from 'app/auth/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RandomGuard } from 'app/guards/random.guard';
import { AuthModule } from 'app/auth/auth.module';
import { AuthserviceService } from 'app/auth/authservice.service';
import { LibraryService } from 'app/services/library.service';
import { TestComponent } from 'app/test/test.component';
import { MessageService } from 'app/services/message.service';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { SampleComponent } from 'app/sample/sample.component';
import { AddBookComponent } from 'app/add-book/add-book.component';
import { StaffHomeComponent } from 'app/staff-home/staff-home.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';
import { AttendanceReportComponent } from 'app/attendance-report/attendance-report.component';
import { StudentsComponent } from 'app/students/students.component';
import { LeaveComponent } from 'app/leave/leave.component';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatRadioModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatStepperModule,
    MatProgressBarModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,

  ],
  providers: [
    AuthserviceService,
    LibraryService,
    MessageService,
    AuthModule,
    RandomGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    IssuebookComponent,
    TransactionsComponent,
    TestComponent,
    SampleComponent,
    AddBookComponent,
    StaffHomeComponent,
    StudentsComponent,
    AttendanceComponent,
    AttendanceReportComponent,
    MarkComponent,
    SyllabusComponent,
    CertificatesComponent,
    LeaveComponent,
    QuizComponent,
    ClubComponent,
    StaffBooksComponent,
    SuperHomeComponent,
    SuperStudentsComponent,
    SuperAttendanceComponent,
    RemittanceComponent,
    RemittanceVerificationComponent,
    ReceivedReportComponent,
    AccountingComponent,
    AccountsReportComponent,
    TransferCertificateComponent,

  ]
})

export class AdminLayoutModule { }
