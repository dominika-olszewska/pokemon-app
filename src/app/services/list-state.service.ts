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

  deleteLists() {
    return this.listSubject.next([]);
  }

  addList(list: any) {
    const currentList = this.listSubject.value;
    this.listSubject.next(list);
  }

  // editList(list: any) {
  //   const currentLists = this.listSubject.value;
  //   const newLists = currentLists.map(l => l.id !== list.id ? l : {...list});
  //   this.listSubject.next(newLists);
  // }

  // deleteList(list: any) {
  //   return this.listSubject.next(this.listSubject.value.filter(l => l.id !== list.id));
  // }

}
