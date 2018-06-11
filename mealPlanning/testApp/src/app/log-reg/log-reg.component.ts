import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  newUser:any = {
    email: '',
    password: '',
    pwconfirm: '',
  }

  user:any = {
    email: '',
    password: ''
  }

  registrationErrors: string[] = [];
  errors: string[] = []
  constructor(private auth: AuthService, private router: Router) { }

 loginFailed = false;

  onLogin(user){
    console.log(user)
    this.auth.login(user)
      .subscribe(() => {
        this.router.navigateByUrl('plans');
      }, error => {
        console.log("logRegComp > Login", error)
        this.loginFailed = true;
      })
  }

  onRegister(){
    console.log("registering user", this.newUser )
    this.auth.register(this.newUser)
      .subscribe(() => {
        this.router.navigateByUrl('plans')
      }, error => {
        console.log("LogRegComponent > Register",error)
      })
  }

  ngOnInit() {
  }

}
