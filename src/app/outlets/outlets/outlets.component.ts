import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss']
})
export class OutletsComponent implements OnInit {

  outlets = ProductDetailOutlets;

  constructor() { }

  ngOnInit(): void {
  }
  

}
