"use strict";
var speedIntervalMLS = 1000;
var sizeOfCost = 2;
if (speedIntervalMLS < 77) {
    sizeOfCost = 3;
}
var kavkazDebet = 40000 * 12;
var grayDebet = 45000 * 12;
var allDebet = kavkazDebet + grayDebet;
var theCostOfASecond = allDebet / 365 / 86400;
var startUbitka = new Date('2023-08-01');
var dateUbitka = startUbitka.toLocaleDateString();
var start_ubitka = document.getElementById("start-ubitka");
start_ubitka.innerHTML = dateUbitka;
setInterval(function () {
    var curentDate = new Date();
    var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
    var potencialLosses = theCostOfASecond * intervalDate;
    var potencial_Losses = document.getElementById("potencial-losses");
    potencial_Losses.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost);
}, speedIntervalMLS);
