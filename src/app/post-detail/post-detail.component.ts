import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post';
import { PostDetailService } from './post_detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostDetailService],
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostDetailService) { }

  post!: Post;
  ngOnInit(): void {
    this.getPostDetail(this.route.snapshot.paramMap.get('id'));
  }

  getPostDetail(id: string | null): void {
    this.service.getPostDetail(id ?? '')
      .subscribe(
        data => {
          this.post = data;
        }
      );
  }

}
