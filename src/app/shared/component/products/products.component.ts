import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/of.service';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../model/post.const';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  postArr: Ipost[] = [];

  constructor(
    private _ofService: OfService,
    private _postService: PostService

  ) { }

  ngOnInit(): void {
    this.handleOfObservable();
    this.handleSkillsObservable();
    this.handlePostObservable();
    this.handleCustonInterval();
  }

  handleOfObservable() {
    this._ofService.of$.subscribe(res => {
      console.log(res);
    })
  }

  handleSkillsObservable() {
    this._ofService.skills$.subscribe(res => {
      console.log(res);
    })
  }

  handlePostObservable() {
    this._postService.fetchAllPosts()
      .subscribe((res: Ipost[]) => {
        this.postArr = res;
        console.log(this.postArr);
      })
  }

  handleCustonInterval() {
    this._ofService.customInterval.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed');
      }

    )
  }



}
