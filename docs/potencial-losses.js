// Реальный потенциальный убыток по недопониманию созданный субъектом права
// Доход был оборван 2023/08/01 и начал расти завуалированный убыток
var speedIntervalMLS = 1000;
var sizeOfCost = 2;
if (speedIntervalMLS < 77) {
    sizeOfCost = 3;
}
var kavkazDebet = 40000 * 12;
var grayDebet = 45000 * 12;
var allDebet = kavkazDebet + grayDebet;
// const theCostOfASecond = 2635200 // среднее потерь в сукунду
var theCostOfASecond = allDebet / 365 / 86400;
var startUbitka = new Date('2023-08-01'); // дата прекращения ренты клиенту по решению Михеевой Н.В.
var dateUbitka = startUbitka.toLocaleDateString();
var start_ubitka = document.getElementById("start-ubitka");
start_ubitka.innerHTML = dateUbitka;
var potencial_Losses = document.getElementById("potencial-losses");
function chek_speed_cost() {
    clearInterval(si);
    var chekSpeedCost = document.getElementById("chek-speed-cost");
    if (chekSpeedCost.checked) {
        sizeOfCost = 3;
        speedIntervalMLS = 33;
        console.log(chekSpeedCost.checked, speedIntervalMLS);
        si = setInterval(function () {
            var curentDate = new Date();
            var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
            var potencialLosses = theCostOfASecond * intervalDate;
            potencial_Losses.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost);
        }, speedIntervalMLS);
    }
    else {
        sizeOfCost = 2;
        speedIntervalMLS = 1000;
        console.log(chekSpeedCost.checked, speedIntervalMLS);
        si = setInterval(function () {
            var curentDate = new Date();
            var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
            var potencialLosses = theCostOfASecond * intervalDate;
            potencial_Losses.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost);
        }, speedIntervalMLS);
    }
}
var si = setInterval(function () {
    var curentDate = new Date();
    var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
    var potencialLosses = theCostOfASecond * intervalDate;
    potencial_Losses.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost);
}, speedIntervalMLS);
