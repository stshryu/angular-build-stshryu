import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { ProjectService } from '../services/project.service';

import { Project } from '../datatypes/project';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    pName = '';
    isShowing: boolean = false;

    projects: Project[];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.getProjects();
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }

    getProjectDetails(name: string){
        if(this.pName == name){
            this.pName = '';
            this.isShowing = false;
        } else {
            this.pName = name;
            this.isShowing = true;
        }
    }
}
