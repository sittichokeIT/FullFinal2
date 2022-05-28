import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subjectForm: FormGroup;
  myDate: Date;

  constructor(private fb: FormBuilder, private crudService: CrudService, public router: Router) {
    this.myDate = new Date();
    this.subjectForm = fb.group({
      SubjectID: '',
      SubjectName: '',
      SubjectRoom: '',
      SectionNo: '',
      Day: '',
      MidtermDate: this.myDate.getDate() + '-' + (this.myDate.getMonth()+1) + '-' + (this.myDate.getFullYear()+543),
      FinalDate: '',
      StartTime: '',
      EndTime: '',
      Term: 1,
      Year: 2565,
      UserID: localStorage.getItem('UserID')
    })
  }

  mySelect = ''
  mySelect2 = ''
  mySelect3 = ''
  mySelect4 = ''
  Midterm = ''
  Final = ''

  ngOnInit(): void {
  }

  submit(){
    this.setDate()
    this.crudService.createSubject(this.subjectForm.value)
    .subscribe(res => {
      const response = Object.values(res)
      if(response[0] != "Subject added Successfully!"){
        alert("Subject fail")
        this.router.navigate(['subject-form'])
      }
      else {
        alert("Subject added Successfully!")
        this.router.navigate(['sub-taught'])
      }
    })
    console.log(this.subjectForm.value)
  }

  setDate(){
    let strM = this.Midterm.split("-")
    let dateM = []
    dateM[0] = strM[2]
    dateM[1] = strM[1]
    dateM[2] = String(Number(strM[0])+543)
    this.subjectForm.value.MidtermDate = dateM[0] + '-' + dateM[1] + '-' + dateM[2]
    console.log(this.subjectForm.value.MidtermDate)

    let strF = this.Final.split("-")
    let dateF = []
    dateF[0] = strF[2]
    dateF[1] = strF[1]
    dateF[2] = String(Number(strF[0])+543)
    this.subjectForm.value.FinalDate = dateF[0] + '-' + dateF[1] + '-' + dateF[2]
    console.log(this.subjectForm.value.FinalDate)
  }
}
