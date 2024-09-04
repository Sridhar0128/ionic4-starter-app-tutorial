import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  volume=30;

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService
  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

}
