"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faker = void 0;
var faker = require('faker');
var Faker = /** @class */ (function () {
    function Faker() {
        this.source = faker;
    }
    Faker.prototype.getLocation = function () {
        return {
            lat: parseFloat(this.source.address.latitude()),
            lng: parseFloat(this.source.address.longitude()),
        };
    };
    Faker.prototype.getUserName = function () {
        return this.source.name.firstName();
    };
    Faker.prototype.getCompanyName = function () {
        return this.source.company.companyName();
    };
    Faker.prototype.getCompanyDescr = function () {
        return this.source.company.catchPhrase();
    };
    return Faker;
}());
exports.Faker = Faker;
