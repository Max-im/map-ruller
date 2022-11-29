"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Idb = require('./Faker').Idb;
var Company = /** @class */ (function () {
    function Company(db) {
        this.companyName = db.getCompanyName();
        this.catchPhrase = db.getCompanyDescr();
        this.location = db.getLocation();
    }
    Company.prototype.getContent = function () {
        return "<div>hello from <b>Company</b> ".concat(this.companyName, "! <p>").concat(this.catchPhrase, "</p></div>");
    };
    return Company;
}());
exports.Company = Company;
