import { User } from './User';
import { Company } from './Company';
import { GMap } from './GMap';
import { Faker } from './Faker';

const map = new GMap('map');
const user = new User(new Faker());
const company = new Company(new Faker());

map.addMarker(user);
map.addMarker(company);
