function update_result() {
    let money = +document.querySelector(".calc__item--start > input.calc__value").value
    let year = +document.querySelector(".calc__item--duration > input.calc__value").value

    let result = (money + money * 0.12 * year).toFixed()

    document.querySelector(".calc__result-value").textContent = result
}

update_result()

document.querySelector(".calc__item--start > input.calc__value").addEventListener("input", update_result)
document.querySelector(".calc__item--duration > input.calc__value").addEventListener("input", update_result)