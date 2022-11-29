import { Idb } from './Faker';
import { Mappable } from './GMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(db: Idb) {
    this.companyName = db.getCompanyName();
    this.catchPhrase = db.getCompanyDescr();
    this.location = db.getLocation();
  }

  getContent() {
    return `<div>hello from <b>Company</b> ${this.companyName}! <p>${this.catchPhrase}</p></div>`;
  }
}
