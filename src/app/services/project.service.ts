import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Project } from '../datatypes/project';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retryWhen, filter, delay, take } from 'rxjs/operators';

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient) { }

    private githubUrl = 'https://api.github.com/users/stshryu/repos';

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.githubUrl)
            .pipe(
                catchError(this.handleError('getProjects', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}
