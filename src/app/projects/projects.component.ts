import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProjectService } from '../services/project.service';

import { Project } from '../datatypes/project';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    projects: Project[];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        // this.getProjects();
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }
}
