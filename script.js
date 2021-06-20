const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const year = document.getElementById('year')
const time = document.getElementById('time')
const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear() + 1

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

//Update countdown time
function updateTime() {
  const currentTime = new Date()
  const diff = newYearTime - currentTime
  
  const d = Math.floor(diff / 1000 / 60 / 60 / 24)
  const h = Math.floor(diff / 1000 / 60 / 60 ) % 24
  const m = Math.floor(diff / 1000 / 60) % 60
  const s = Math.floor(diff / 1000) % 60

  //Add values to DOM
  days.innerHTML = d
  hours.innerHTML = h < 10 ? '0' + h : h
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s
  year.innerText = currentYear
}

//show spinner before countdown
setTimeout(() => {
  loading.remove();
  time.style.display = 'flex'
}, 1000);

//Run every second
setInterval(updateTime, 1000);

