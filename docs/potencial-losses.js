// Реальный потенциальный убыток по недопониманию созданный субъектом права
// Доход был оборван 2023/08/01 и начал расти завуалированный убыток
setInterval(function () {
    var curentDate = new Date();
    var SECMONF = 2635200; // среднее потерь в секунду
    var kavkazDebet = 40000;
    var grayDebet = 45000;
    var allDebet = kavkazDebet + grayDebet;
    var startUbitka = new Date('2023-08-01');
    var dateUbitka = startUbitka.toLocaleDateString();
    var start_ubitka = document.getElementById("start-ubitka");
    start_ubitka.innerHTML = dateUbitka;
    var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
    var potencialLosses = allDebet / SECMONF * intervalDate;
    /** Вставка данных в документ */
    var potencial_Losses = document.getElementById("potencial-losses");
    potencial_Losses.innerHTML = "₽ " + potencialLosses.toFixed(2);
}, 1000);
