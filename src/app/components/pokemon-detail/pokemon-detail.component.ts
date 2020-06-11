import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: any;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }
  public clickEvent(event) {
    console.log(event);
    this.isOpen = !this.isOpen;
  }
}
