import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProjectService } from './services/project.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailViewComponent } from './project-detail-view/project-detail-view.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkAboutComponent } from './work-about/work-about.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ProjectsComponent,
        ProjectDetailViewComponent,
        ContactComponent,
        NavbarComponent,
        WorkAboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [ProjectService],
    bootstrap: [AppComponent]
})
export class AppModule { }
