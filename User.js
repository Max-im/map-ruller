"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(db) {
        this.name = db.getUserName();
        this.location = db.getLocation();
    }
    User.prototype.getContent = function () {
        return "<div>hello from <b>User</b> ".concat(this.name, "!</div>");
    };
    return User;
}());
exports.User = User;
