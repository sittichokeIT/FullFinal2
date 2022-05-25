import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService} from '../../../service/crud.service';

@Component({
  selector: 'app-change-sub',
  templateUrl: './change-sub.component.html',
  styleUrls: ['./change-sub.component.css']
})
export class ChangeSubComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    // private router: Router,
    // private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.registerForm = formBuilder.group({
      UserID: 6204062620046,
      SubjectID: [''],
      SectionOld: [''],
      SectionNew: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.updateRegister(this.registerForm.value)
    .subscribe(() => {
      console.log("Change sections successfully!")
      // this.ngZone,run(() =>)
    }, (error) => {
      console.log(error)
    })
  }
}
