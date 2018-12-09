import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import validatorEs from 'vee-validate/dist/locale/es'
Vue.use(VeeValidate, {
  fieldsBagName: 'veeFields'
})
Validator.localize('es', validatorEs)

Validator.extend('strength_password', {
  getMessage: field => `El campo ${field} debe contener al menos: 1 letra mayúscula, 1 letra minúscula, 1 número y un carácter especial (por ejemplo,. _ &? Etc.)
`,
  validate: value => {
    // eslint-disable-next-line no-useless-escape
    let strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
    return strongRegex.test(value)
  }
})
