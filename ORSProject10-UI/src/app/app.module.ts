import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent } from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { AlertComponent } from './alert/alert.component';
import { AlertlistComponent } from './alert/alertlist.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicylistComponent } from './policy/policylist.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorlistComponent } from './sponsor/sponsorlist.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkinglistComponent } from './parking/parkinglist.component';
import { PlanComponent } from './plan/plan.component';
import { PlanlistComponent } from './plan/planlist.component';
import { StateComponent } from './state/state.component';
import { StatelistComponent } from './state/statelist.component';
import { HealthComponent } from './health/health.component';
import { HeathlistComponent } from './health/heathlist.component';
import { LocationComponent } from './location/location.component';
import { LocationlistComponent } from './location/locationlist.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentlistComponent } from './payment/paymentlist.component';
import { CredentialComponent } from './credential/credential.component';
import { CredentiallistComponent } from './credential/credentiallist.component';
import { MaskingComponent } from './masking/masking.component';
import { MaskinglistComponent } from './masking/maskinglist.component';
import { DataComponent } from './data/data.component';
import { DatalistComponent } from './data/datalist.component';
import { AccessComponent } from './access/access.component';
import { AccesslistComponent } from './access/accesslist.component';
import { FeatureComponent } from './feature/feature.component';
import { FeaturelistComponent } from './feature/featurelist.component';
import { PasswordComponent } from './password/password.component';
import { PasswodlistComponent } from './password/passwodlist.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintlistComponent } from './complaint/complaintlist.component';
import { DeviceComponent } from './device/device.component';
import { DevicelistComponent } from './device/devicelist/devicelist.component';
import { BatchComponent } from './batch/batch.component';
import { BatchlistComponent } from './batch/batchlist.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerlistComponent } from './scheduler/schedulerlist.component';
import { LoginhistoryComponent } from './loginhistory/loginhistory.component';
import { LoginhistroylistComponent } from './loginhistory/loginhistroylist.component';
import { TransportComponent } from './transport/transport.component';
import { TransportlistComponent } from './transport/transportlist.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationlistComponent } from './verification/verificationlist.component';
import { MobileverificationComponent } from './mobileverification/mobileverification.component';
import { MobileverificationlistComponent } from './mobileverification/mobileverificationlist.component';
import { AccountComponent } from './account/account.component';
import { AccountlistComponent } from './account/accountlist.component';
import { GenderComponent } from './gender/gender.component';
import { GenderlistComponent } from './gender/genderlist.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitylistComponent } from './activity/activitylist.component';
import { SmartparkingComponent } from './smartparking/smartparking.component';
import { SmartparkinglistComponent } from './smartparking/smartparkinglist.component';
import { GamingComponent } from './gaming/gaming.component';
import { GaminglistComponent } from './gaming/gaminglist.component';

import { ChatComponent } from './chat/chat.component';
import { ChatlistComponent } from './chat/chatlist.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { CybersecuritylistComponent } from './cybersecurity/cybersecuritylist.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movie/movielist.component';
import { CarComponent } from './car/car.component';
import { CarlistComponent } from './car/carlist/carlist.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobilelistComponent } from './mobile/mobilelist.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitallistComponent } from './hospital/hospitallist.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionlistComponent } from './prescription/prescriptionlist.component';
import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './report/reportlist.component';








// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,

    RoleComponent,
    RoleListComponent,
    CourseComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    LoaderComponent,
    FileComponent,
    NavbarComponent,
    FooterComponent,
    MyprofileComponent,
    ProductComponent,
    ProductListComponent,
    CustomerComponent,
    CustomerlistComponent,
    AlertComponent,
    AlertlistComponent,
    OrderComponent,
    OrderlistComponent,
    PolicyComponent,
    PolicylistComponent,
    SponsorComponent,
    SponsorlistComponent,
    ParkingComponent,
    ParkinglistComponent,
    PlanComponent,
    PlanlistComponent,
    StateComponent,
    StatelistComponent,
    HealthComponent,
    HeathlistComponent,
    LocationComponent,
    LocationlistComponent,
    PaymentComponent,
    PaymentlistComponent,
    CredentialComponent,
    CredentiallistComponent,
    MaskingComponent,
    MaskinglistComponent,
    DataComponent,
    DatalistComponent,
    AccessComponent,
    AccesslistComponent,
    FeatureComponent,
    FeaturelistComponent,
    PasswordComponent,
    PasswodlistComponent,
    ComplaintComponent,
    ComplaintlistComponent,
    DeviceComponent,
    DevicelistComponent,
    BatchComponent,
    BatchlistComponent,
    SchedulerComponent,
    SchedulerlistComponent,
    LoginhistoryComponent,
    LoginhistroylistComponent,
    TransportComponent,
    TransportlistComponent,
    VerificationComponent,
    VerificationlistComponent,
    MobileverificationComponent,
    MobileverificationlistComponent,
    AccountComponent,
    AccountlistComponent,
    GenderComponent,
    GenderlistComponent,
    ActivityComponent,
    ActivitylistComponent,
    SmartparkingComponent,
    SmartparkinglistComponent,
    GamingComponent,
    GaminglistComponent,
  
    ChatComponent,
    ChatlistComponent,
    CybersecurityComponent,
    CybersecuritylistComponent,
    MovieComponent,
    MovielistComponent,
    CarComponent,
    CarlistComponent,
    MobileComponent,
    MobilelistComponent,
    HospitalComponent,
    HospitallistComponent,
    PrescriptionComponent,
    PrescriptionlistComponent,
    ReportComponent,
    ReportlistComponent,
  
 

    
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}