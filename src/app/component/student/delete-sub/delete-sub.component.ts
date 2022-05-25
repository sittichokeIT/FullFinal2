import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService} from '../../../service/crud.service';

@Component({
  selector: 'app-delete-sub',
  templateUrl: './delete-sub.component.html',
  styleUrls: ['./delete-sub.component.css']
})
export class DeleteSubComponent implements OnInit {

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
    this.crudService.deleteRegister(this.registerForm.value)
    .subscribe(() => {
      console.log("Delete successfully!")
      // this.ngZone,run(() =>)
    }, (error) => {
      console.log(error)
    })
  }

}
