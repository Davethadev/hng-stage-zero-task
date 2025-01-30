const day = document.getElementById("day")

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
const currentDayOfTheWeek = weekDays[new Date().getDay()]
day.textContent = currentDayOfTheWeek

function updateTime() {
    const time = document.getElementById("time")
    const currentTimeInMilliseconds = new Date().getTime();
    time.textContent = currentTimeInMilliseconds
}

setInterval(updateTime, 100)

updateTime()