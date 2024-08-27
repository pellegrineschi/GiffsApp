import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
  template:  `
  <h5>Buscar:<h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar GIFs...">`
})
export class SearchBoxComponent {

}
