'use strict'

const todayObj = new Date()

function onCalculate(elForm) {
  const dayValue = elForm.querySelector('#day-input').value
  const monthValue = elForm.querySelector('#month-input').value
  const yearValue = elForm.querySelector('#year-input').value



  const birthdate = `${yearValue}-${monthValue}-${dayValue}`
  const birthdateObj = new Date(birthdate)
  const res = getAge(todayObj, birthdateObj)

  const elRes = document.querySelector('.results')
  elRes.querySelector('.years-res').innerText = res.year
  elRes.querySelector('.months-res').innerText = res.month
  elRes.querySelector('.days-res').innerText = res.day
}

function onCheckValidDate(elForm, ev) {
    ev.preventDefault()
    const daysInput = elForm.querySelector('#day-input')
    const monthInput = elForm.querySelector('#month-input')
    const yearInput = elForm.querySelector('#year-input')
    const daysInMonth = getDaysInMonth(yearInput.value, monthInput.value)
    if (daysInput.value > daysInMonth) {
        console.log('hi')
        return daysInput.setCustomValidity('Date is invalid')   
    }
    onCalculate(elForm)
}

function getAge(todayObj, birthdateObj) {
  var year = subOfTwoNums(todayObj.getFullYear(), birthdateObj.getFullYear())
  var month = todayObj.getMonth() - birthdateObj.getMonth()
  var day = todayObj.getDate() - birthdateObj.getDate()

  if (day < 0) {
    day = getDaysInMonth(todayObj.getFullYear(), todayObj.getMonth()) + day
    month--
  }
  if (month < 0) {
    year--
    month = 12 + month
  }

  return {
    year,
    month,
    day,
  }
}

function getDaysInMonth(year, month) {
  const date = new Date(year, month - 1, 1)

  date.setMonth(date.getMonth() + 1)
  date.setDate(date.getDate() - 1)

  return date.getDate()
}

function subOfTwoNums(one, two) {
  var big = one
  var small = two
  if (two > big) {
    big = two
    small = one
  }

  return big - small
}
