const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["02-01", "02-02", "02-03", "02-04"],
    water: ["02-01", "02-02", "02-03", "02-04"],
    gym: ["02-01", "02-02", "02-03", "02-04"],
    sleep: ["02-01", "02-02", "02-03", "02-04"],
    pet: ["02-01", "02-02", "02-03", "02-04"],
    fruit: ["02-01", "02-02", "02-03", "02-04"]
}

nlwSetup.setData(data)
nlwSetup.load()