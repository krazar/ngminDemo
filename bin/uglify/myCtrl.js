var MyCtrl = function(r, a, l) {
    a.get("/").success(function(a) {
        r.data = a;
        r.users = l.users;
    });
};

var app = angular.module("myModule", []);

app.controller("MyCtrl", MyCtrl);