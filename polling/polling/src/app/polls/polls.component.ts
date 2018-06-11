import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  thisUser
  currentUser

  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    this.thisUser = this.cookieService.get('userID')

    if(this.thisUser){
      // this.mealPlanService.getUser(this.thisUser)
      this.authService.getUser(this.thisUser)
      .subscribe(
      (response) => {
        console.log("should be actual user object", response)
        this.currentUser = response
      },
      (err) => {
        console.log("error in subscribe on init", err)
      }
      ) 
  }

  }

  logout(){
    this.authService.logout().subscribe();
    this.router.navigateByUrl('/');
  }
}
