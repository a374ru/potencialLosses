
// Реальный потенциальный убыток по недопониманию созданный субъектом права
// Доход был оборван 2023/08/01 и начал расти завуалированный убыток
let speedIntervalMLS = 1000
let sizeOfCost = 2

if (speedIntervalMLS < 77) {
	sizeOfCost = 3

}

const kavkazDebet = 40000 * 12
const grayDebet = 45000 * 12
const allDebet = kavkazDebet + grayDebet
// const theCostOfASecond = 2635200 // среднее потерь в сукунду
const theCostOfASecond = allDebet / 365 / 86400
const startUbitka = new Date('2023-08-01') // дата прекращения ренты клиенту по решению Михеевой Н.В.
const dateUbitka = startUbitka.toLocaleDateString()
const start_ubitka = document.getElementById("start-ubitka")
start_ubitka!.innerHTML = dateUbitka
const potencial_Losses = document.getElementById("potencial-losses")

function chek_speed_cost() {
	clearInterval(si);
	let chekSpeedCost = document.getElementById("chek-speed-cost");
	if (chekSpeedCost!.checked) {
		sizeOfCost = 3;
		speedIntervalMLS = 33;
		console.log(chekSpeedCost!.checked, speedIntervalMLS);
		si = setInterval(

			() => {
				var curentDate = new Date();
				var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
				var potencialLosses = theCostOfASecond * intervalDate;
				potencial_Losses!.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost);
			},
			speedIntervalMLS

		)
	}
	else {
		sizeOfCost = 2;
		speedIntervalMLS = 1000;
		console.log(chekSpeedCost!.checked, speedIntervalMLS);
		si = setInterval(

			() => {
				var curentDate = new Date();
				var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000;
				var potencialLosses = theCostOfASecond * intervalDate;
				potencial_Losses!.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost)
			},
			speedIntervalMLS

		)


	}
}
let si = setInterval(

	() => {
		var curentDate = new Date();
		var intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000
		var potencialLosses = theCostOfASecond * intervalDate
		potencial_Losses!.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost)
	},
	speedIntervalMLS

)
