import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faCouch,
  faUserFriends,
  faAngry,
  faComment,
  faBars,
  faCaretDown,
  faMobileAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDev,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Styles are imported above, so don't inject them at runtime
config.autoAddCss = false

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faCouch,
  faUserFriends,
  faAngry,
  faComment,
  faBars,
  faCaretDown,
  faMobileAlt,
  faUsers,
  faDev,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
