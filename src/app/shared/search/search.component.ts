import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() data = new EventEmitter();
  per_page: number | string = 5;

  search: string = '';
  status: string = '';

  results = [
    {
      value: 5,
      name: '5',
    },
    {
      value: 10,
      name: '10',
    },
    {
      value: 15,
      name: '15',
    },
    {
      value: 20,
      name: '20',
    },
    // {
    //   value: null,
    //   name: '♾️',
    // },
  ];

  ngOnInit(): void {
    this.sendSearch();
  }

  sendSearch() {
    this.data.emit([this.per_page, this.search, this.status]);
  }

  clear() {
    this.search = '';
    this.sendSearch();
  }
}
