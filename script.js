const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso ❌")
        return
    }

    nlwSetup.addDay(today)
}

nlwSetup.setData(data)
nlwSetup.load()