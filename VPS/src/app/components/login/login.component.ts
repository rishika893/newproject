import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: String = 'testuser@vpsi.io';
  password: String = 'testUser1*';

  constructor(
    private authService: AuthserviceService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {
    this.onSubmit();
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.email === 'testuser@vpsi.io' && this.password === 'testUser1*') {
      
      this.authService.login(this.email, this.password).subscribe(
        result => {
          console.log(result);
          this.flashMessagesService.show('Login Successful!', { cssClass: 'alert-success', timeout: 1000 });
          this.router.navigate(['devices']);
        }, error => {
          console.log(error);
          this.flashMessagesService.show('Error in logging in!', { cssClass: 'alert-danger', timeout: 1000 });
        }
      );
    }
  }
}
