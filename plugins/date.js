import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

Vue.prototype.$dateToTimestamp = (date) => {
  const myDate = Vue.prototype.$formatDate(date)
  return new Date(myDate)
}
