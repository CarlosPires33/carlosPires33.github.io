export default {
  methods: {
    disabledSubmitBtn(input1, input2, input3){
      return !this.$v.form[input1].required || (!this.$v.form[input2].required || !this.$v.form[input2].email ) || !this.$v.form[input3].required;
    },
    showErrorInput(input){
      return !this.$v.form[input].required;
    },
  }
}   