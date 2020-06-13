import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notifications.service';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../services/session-storage.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon;
  elementsFromStorage: any [];

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private sessionStorageService: SessionStorageService,
  ) {
  }

  ngOnInit() {
    this.elementsFromStorage = this.getElementsFromStorage('pokeIds');
  }

  public isInStorageFn(pokeId): boolean {
    const elementsFromStorage = this.elementsFromStorage.filter(elId => elId === pokeId);
    return elementsFromStorage.length > 0;
  }

  private getPokeImage(pokeId: string): any {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
  }

  private getElementsFromStorage(keyInStorage) {
    let elements = this.sessionStorageService.getItem(keyInStorage) || [];
    if (elements && (typeof elements) !== 'object') {
      elements = JSON.parse(elements);
    }
    return elements;
  }

  private addToSessionStorage(element, keyInStorage) {
    const valuesInStorage = this.elementsFromStorage.filter(EL => element.id === EL.id);
    if (valuesInStorage.length === 0) {
      this.elementsFromStorage.push(element.id);
    }
    this.sessionStorageService.setItem(keyInStorage, this.elementsFromStorage);
  }


  private addToPokeball(pokemon: any): void {
    this.addToSessionStorage(pokemon, 'pokeIds');
    this.notificationService.popToastSuccess(`${pokemon.name} has been added to the pokeball`);
  }


}
