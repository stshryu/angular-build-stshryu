import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-project-detail-view',
    templateUrl: './project-detail-view.component.html',
    styleUrls: ['./project-detail-view.component.css']
})
export class ProjectDetailViewComponent implements OnInit {

    private _name: string;

    @Input()
    set projectName(name: string) {
        this._name = name;
        this.showDetailedProject(this._name);
    }

    constructor() { }

    ngOnInit() {
    }

    showDetailedProject(name: string){
        console.log('detailed view')
        console.log(name);
    }
}
