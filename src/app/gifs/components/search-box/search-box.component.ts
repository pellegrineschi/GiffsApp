import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'gifs-search-box',

  styleUrl: './search-box.component.css',
  template: ` <h5>
    Buscar:
    <h5>
      <input type="text"
      class="form-control"
      placeholder="Buscar GIFs..."
      (keyup.enter)="searchTag()"
      #txtTagImput

      />


    </h5>
  </h5>`,
})
export class SearchBoxComponent {

  @ViewChild("txtTagImput")
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService){}

  //searchTag(newTag:string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";



  }
}
