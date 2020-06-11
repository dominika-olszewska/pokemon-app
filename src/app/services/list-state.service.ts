import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsStateService {
  private listSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  list$: Observable<any[]> = this.listSubject.asObservable();

  constructor() {
  }

  setList(list: any) {
    return this.listSubject.next(list);
  }
}
