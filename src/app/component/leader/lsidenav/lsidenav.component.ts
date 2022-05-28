import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-lsidenav',
  templateUrl: './lsidenav.component.html',
  styleUrls: ['./lsidenav.component.css']
})
export class LsidenavComponent implements OnInit {

  auth = { 
    token: localStorage.getItem('auth-token') ,
    UserID: localStorage.getItem('UserID')
  }

  Name = localStorage.getItem('Name')

  constructor(public http: HttpClient, public router: Router, private crudService: CrudService) { }

  ngOnInit(): void {
  }

  verify(string: string) {
    this.crudService.verify(this.auth)
    .subscribe({
      next: (response) => {
        const res = Object.values(response)
        if(res[0] == localStorage.getItem('UserID')){
          if(string == "lsub-taught") this.router.navigate(['lsub-taught'])
          if(string == "lstudentList") this.router.navigate(['lstudentList'])
          if(string == "ldata-subject") this.router.navigate(['ldata-subject'])

        }else{
          alert("Token expired")
          this.router.navigate([''])
        }
      },
      error: () => alert("Token expired")
    });
  }

}
