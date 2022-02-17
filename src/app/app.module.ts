import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SocialComponent } from './social/social.component';
import { DividerComponent } from './divider/divider.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SummaryComponent } from './summary/summary.component';
import { SpacerComponent } from './spacer/spacer.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ProgrammingExperienceComponent } from './programming-experience/programming-experience.component';
import { ResumeComponent } from './resume/resume.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    DividerComponent,
    MainContentComponent,
    SummaryComponent,
    SpacerComponent,
    ProfilePicComponent,
    ProgrammingExperienceComponent,
    ResumeComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
