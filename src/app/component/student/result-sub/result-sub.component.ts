import { Component, OnInit } from '@angular/core';
import { CrudService} from '../../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result-sub',
  templateUrl: './result-sub.component.html',
  styleUrls: ['./result-sub.component.css']
})
export class ResultSubComponent implements OnInit {

  registerResult: FormGroup
  Result:any = []

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder
    ) {
    this.registerResult = formBuilder.group({
      UserID: 6204062620046,
      Term: 1,
      Year: 2565
    })
  }

  ngOnInit(): void {
    this.crudService.regirterResult(this.registerResult.value)
    .subscribe(res => {
      console.log(res)
      this.Result = res
    })
  }


}
