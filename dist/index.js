"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Company_1 = require("./Company");
var GMap_1 = require("./GMap");
var Faker_1 = require("./Faker");
var map = new GMap_1.GMap('map');
var user = new User_1.User(new Faker_1.Faker());
var company = new Company_1.Company(new Faker_1.Faker());
map.addMarker(user);
map.addMarker(company);
