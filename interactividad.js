const actualYear = 2023
const locale = "es" //spanish

const months = [... Array(12).keys()]
const intl = new Intl.DateTimeFormat(locale,{month: 'long'})

const calendar = months.map(monthKey => {
    const monthName = intl.format(new Date (actualYear, monthKey))
    return monthName
})

console.log(calendar);