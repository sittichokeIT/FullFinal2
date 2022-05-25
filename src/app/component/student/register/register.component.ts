import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService} from '../../../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    // private router: Router,
    // private ngZone: NgZone,
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
  // fakeArray = new Array(12);


}
