import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notifications.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: any;

  constructor(private notificationService: NotificationService, private router: Router) {
  }

  ngOnInit() {
  }

  private getPokeImage(pokeId: string): any {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
  }

  private addToPokeball(id: string): void {
    this.notificationService.popToastSuccess(`Added to pokeball ${id}`);
  }


}
