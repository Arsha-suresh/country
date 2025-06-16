import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [TitleCasePipe, ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  protected searchBylist = ['name', 'code', 'currency', 'lang', 'capitalCity', 'region'];
  protected formbuilder = inject(FormBuilder);
  protected forms = this.formbuilder.group(
    { search: ['', Validators.required] ,
     type: ['', Validators.required] }

  );

  public Submit() {
    console.log(this.forms?.valid);
    console.log(this.forms.get('search')?.errors);

  }

}

