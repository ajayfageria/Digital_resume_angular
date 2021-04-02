import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/httpService';
import { ApiService } from './services/apiService';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { AlertService } from './services/alertService';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth-guards';
import { AnonGuards } from './guards/anon-guards';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { Onboardingcomplete } from './guards/onboardingcomplete -guards';
import { Onboardingincomplete } from './guards/onboardingincomplete-guards';
import { Verificatoncompleted } from './guards/verificationcompleted-guards';
import { Verificatonincomplete } from './guards/verificatonincomplete-guards';
import { OnboardingIntroComponent } from './container/onboarding-intro/onboarding-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnboardingIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService,ApiService,AlertService,AuthGuard,AnonGuards,Onboardingcomplete,Onboardingincomplete,
     Verificatoncompleted,Verificatonincomplete
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }