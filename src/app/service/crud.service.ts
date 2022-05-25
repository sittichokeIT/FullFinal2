import { Injectable } from '@angular/core';
import {  catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

//model
export class Register {
  UserID!: String;
  SubjectID!: String;
  SectionNo!: String;
}

export class UpdateRegis {
  UserID!: String;
  SubjectID!: String;
  SectionOld!: String;
  SectionNew!: String;
}

export class ResultRegis {
  UserId!: String;
  Term!: String;
  Year!: String;
}

export class SubjectTest {
  UserID!: String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // rootpath
  REST_APIREGIS: string = "http://localhost:4000/api/register"
  REST_APISUBJ: string = "http://localhost:4000/api/subject"

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private httpClient: HttpClient) {}

  //function
  createRegister(data: Register): Observable<any> {
    let API_URL = `${this.REST_APIREGIS}/`
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateRegister(data: UpdateRegis): Observable<any> {
    let API_URL = `${this.REST_APIREGIS}/updateRegis`
    return this.httpClient.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteRegister(data: Register): Observable<any> {
    let API_URL = `${this.REST_APIREGIS}/deleteRegis`
    return this.httpClient.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }

  regirterResult(data: ResultRegis): Observable<any> {
    let API_URL = `${this.REST_APIREGIS}/findTYRegis`
    return this.httpClient.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }

  subjectTest(data: SubjectTest): Observable<any> {
    let API_URL = `${this.REST_APISUBJ}/findtest`
    return this.httpClient.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }

}