import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from "@angular/router";

export interface Item {
  uid: '';
  location: '';
  description: '';
}

@Injectable({
  providedIn: 'root'
})
export class HazardDataService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item>;

  constructor(public db: AngularFirestore, public router: Router) {
    this.itemsCollection = this.db.collection('items');
  }
  addItem(item: Item) {
    this.itemsCollection.add(item).then(() => this.router.navigateByUrl(''))
      .catch((error) => console.log(error));
  }
}
