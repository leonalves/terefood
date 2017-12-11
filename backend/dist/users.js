"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "leonalves@msn.com": new User('leonalves@msn.com', 'leonalves', 'Nanda2008'),
    "nanda@msn.com": new User('nanda@msn.com', 'nanda', '221278')
};
