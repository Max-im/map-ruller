const faker = require('faker');

type Location = { lat: number; lng: number };

export interface Idb {
  getLocation(): Location;
  getUserName(): string;
  getCompanyName(): string;
  getCompanyDescr(): string;
}

export class Faker implements Idb {
  private source = faker;

  getLocation(): Location {
    return {
      lat: parseFloat(this.source.address.latitude()),
      lng: parseFloat(this.source.address.longitude()),
    };
  }
  getUserName(): string {
    return this.source.name.firstName();
  }
  getCompanyName(): string {
    return this.source.company.companyName();
  }
  getCompanyDescr(): string {
    return this.source.company.catchPhrase();
  }
}
