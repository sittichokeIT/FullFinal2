import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService} from '../../../service/crud.service';

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.css']
})
export class AddSubComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.registerForm = formBuilder.group({
      UserID: 6204062620046,
      SubjectID: [''],
      SectionNo: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.createRegister(this.registerForm.value)
    .subscribe(() => {
      console.log("Register successfully!")
      // this.ngZone,run(() =>)
    }, (error) => {
      console.log(error)
    })
  }

}
