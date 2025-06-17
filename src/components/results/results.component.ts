import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnChanges{

  searchResults = input<any>();

  ngOnChanges(): void {
    console.log(this.searchResults());
  }


}
