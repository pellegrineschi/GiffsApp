import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lyze-Image',
  templateUrl: './lyzeImage.component.html',

})
export class LyzeImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = ""

  public hasLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required')
  }

  onload(){
    console.log('image loaded');
    this.hasLoaded = true;

  }

}
