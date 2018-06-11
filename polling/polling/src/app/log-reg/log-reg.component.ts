import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  user = {
    name: '',
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  logReg(){
    console.log(this.user.name);
    this.authService.logReg(this.user)
    .subscribe(
      (data) => {
        console.log("data from logRegComponent", data)
        this.router.navigateByUrl('/polls')
        
      },
      (err) => {

      }
    )
    this.user.name = '';
  }

}
