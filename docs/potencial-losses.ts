
// Реальный потенциальный убыток по недопониманию созданный субъектом права
// Доход был оборван 2023/08/01 и начал расти завуалированный убыток
let speedIntervalMLS = 1000

let sizeOfCost = 2
if (speedIntervalMLS < 77) {
	sizeOfCost = 3
}

setInterval(function () {
	let curentDate = new Date()
	const kavkazDebet = 40000
	const grayDebet = 45000
	const allDebet = kavkazDebet + grayDebet


	// const theCostOfASecond = 2635200 // среднее потерь в сукунду
	const theCostOfASecond = allDebet / 30.5 / 86400

	const startUbitka = new Date('2023-08-01') // дата прекращения ренты клиенту по решению Михеевой Н.В.
	const dateUbitka = startUbitka.toLocaleDateString()
	const start_ubitka = document.getElementById("start-ubitka")
	start_ubitka!.innerHTML = dateUbitka

	let intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000

	let potencialLosses = theCostOfASecond * intervalDate

	const potencial_Losses = document.getElementById("potencial-losses")

	potencial_Losses!.innerHTML = "₽ " + potencialLosses.toFixed(sizeOfCost)
}, speedIntervalMLS)
