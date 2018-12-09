export default {
  methods: {
    validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.errors.has(ref) ? 'valid' : 'invalid'
      }
      return null
    }
  }
}
