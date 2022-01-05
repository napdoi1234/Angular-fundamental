import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  providers: [PostService],
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  filteredData: Post[] = [];
  posts: Post[] = [];

  constructor(private postsService: PostService, private router: Router) { }

  columns = [
    { prop: 'userId', name: 'UserId', sortable: true, width: 100 },
    { prop: 'id', name: 'Id', sortable: true, width: 50 },
    { prop: 'title', name: 'Title', sortable: true, width: 400 },
    { prop: 'body', name: 'Body', sortable: true, width: 400 },
  ];
  rows = this.posts;

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(
        data => {
          this.posts = data;
          this.rows = this.posts;
          this.filteredData = this.posts;
        }
      );
  }

  filterDatatable(event: any) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();

    this.rows = this.filteredData.filter((item) => item.body.toString().toLowerCase().indexOf(val) !== -1 || !val || item.title.toString().toLowerCase().indexOf(val) !== -1)
  };

  viewDetail(valObj: Post) {
    this.router.navigate(['/post/' + valObj.id])
  }

  delete(value: Post) {
    this.rows = this.rows.filter(item => item.id !== value.id);
  }
}
