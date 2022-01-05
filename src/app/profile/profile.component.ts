import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { User } from './user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: ProfileService) { }
  userId: string = '';
  user: User | undefined

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') ?? 'empty';
    if (this.userId === 'empty') {
      this.router.navigate(['/login']);
    }
    else {
      this.getProfile(this.userId);
    }
  }

  getProfile(userId: string) {
    this.service.getProfile(userId)
      .subscribe(
        data => {
          this.user = data;
        }
      );
  }

}
