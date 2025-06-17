import { Component, computed, inject, Injector, Signal, signal } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { formSelection } from '../../interfaces/types';
import { HttpService } from '../../services/http.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResultsComponent } from '../results/results.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [SearchComponent, ResultsComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  http = inject(HttpService);
  searchResults :Signal<Object|undefined|null>= computed(()=> null);
  isError= false;
  injector = inject(Injector);

  getUserSelection(formSelection:formSelection){
    try{
    console.log("formSelection", formSelection);
    switch(formSelection.type){
      case 'name':
        this.searchResults = toSignal( this.http.getSearchByName(formSelection.search),{injector:this.injector});
    }
  }
  catch(err){
    console.log(err);
    this.isError = true;
  }


  }

}
