import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: any;
  @Output() deletePokemonClicked: EventEmitter<any> = new EventEmitter<any>();

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }
  public clickEvent() {
    this.isOpen = !this.isOpen;
  }
}
