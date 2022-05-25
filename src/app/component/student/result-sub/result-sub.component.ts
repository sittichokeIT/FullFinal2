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
      UserID: localStorage.getItem('UserID'),
      Term: 1,
      year: 2565
    })
  }

  ngOnInit(): void {
    this.crudService.regirterResult(this.registerResult.value)
    .subscribe(res => {
      console.log(res)
      this.Result = res
    })
  }
  
  mySelect = '2';
  selectedValue: any;

  data = [
    {
      id: 1,
      year: '2563',
    },
    {
      id: 2,
      year: '2564',
    },
    {
      id: 3,
      year: '2565',
    }

  ];


  selectChange() {
      this.selectedValue = this.crudService.getDropDownText(this.mySelect, this.data)[0].year;
      this.registerResult = this.formBuilder.group({
        Year: [this.selectedValue],
        Term: 1,
      })

  }

}



