import { Idb } from './Faker';
import { Mappable } from './GMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(db: Idb) {
    this.name = db.getUserName();
    this.location = db.getLocation();
  }

  getContent() {
    return `<div>hello from <b>User</b> ${this.name}!</div>`;
  }
}
