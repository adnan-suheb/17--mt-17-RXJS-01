import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../model/post.const';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() postObj!: Ipost;

  constructor() { }

  ngOnInit(): void {
  }

}
