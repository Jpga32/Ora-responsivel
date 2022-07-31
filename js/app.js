const SecondsContainer = document.querySelector("#seconds")
const minutesContainer = document.querySelector("#minutes")
const HoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")

const proximaData = new Date().getFullYear() + 1
const DataLancamento = new Date(`september 01 2022 ${proximaData} 00:00:00`)

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = DataLancamento - currentTime
    const days = Math.floor( difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor( difference / 1000 / 60 / 60 ) %24
    const Minutes = Math.floor( difference / 1000 / 60 ) %60
    const seconds = Math.floor( difference / 1000 ) %60


    SecondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes <  10 ? '0' + Minutes : Minutes
    HoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
   
  

}

setInterval(updateCountdown, 1000)