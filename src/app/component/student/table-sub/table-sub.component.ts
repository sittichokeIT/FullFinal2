import { Component, OnInit } from '@angular/core';
import { CrudService} from '../../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-sub',
  templateUrl: './table-sub.component.html',
  styleUrls: ['./table-sub.component.css']
})
export class TableSubComponent implements OnInit {

  registerResult: FormGroup
  Result:any = []

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder
    ) {
    this.registerResult = formBuilder.group({
      UserID: 6204062620046
    })
  }

  ngOnInit(): void {
    this.crudService.subjectTest(this.registerResult.value)
    .subscribe(res => {
      console.log(res)
      this.Result = res
    })
  }

}
