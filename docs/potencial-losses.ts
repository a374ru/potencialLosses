
// Реальный потенциальный убыток по недопониманию созданный субъектом права
// Доход был оборван 2023/08/01 и начал расти завуалированный убыток
setInterval(function () {
	let curentDate = new Date()
	const SECMONF = 2635200 // среднее потерь в секунду
	const kavkazDebet = 40000
	const grayDebet = 45000
	const allDebet = kavkazDebet + grayDebet
	const startUbitka = new Date('2023-08-01:00:00:00')
	const dateUbitka = startUbitka.toLocaleDateString()
	const start_ubitka = document.querySelector("#start-ubitka")
	let rrr = start_ubitka!.innerHTML = dateUbitka


	let intervalDate = (curentDate.getTime() - startUbitka.getTime()) / 1000

	let potencialLosses = allDebet / SECMONF * intervalDate
	/** Вставка данных в документ */

	const potencial_Losses = document.querySelector("#potencial-losses")

	potencial_Losses!.innerHTML = "₽ " + potencialLosses.toFixed(2)
}, 1000)
