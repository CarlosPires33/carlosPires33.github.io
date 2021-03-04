<template>
  <div>
    <b-container>
        <b-form @submit.prevent="addComment" >
            <b-form-group
                  label="Name"
                  label-for="name"
                  class="font-weight-bold"
                >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="add name"
                  class="input-class"
                ></b-form-input>
            <small v-if="showErrorInput('name')" class="error-message">Name is required</small>
            </b-form-group>

            <b-form-group
                  label="Email"
                  label-for="email"
                  class="font-weight-bold"
                >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="add email"
                  class="input-class"
                ></b-form-input>
                <small v-if="showErrorInput('email') || !$v.form.email.email" class="error-message">Valid Email is required</small>
            </b-form-group>

            <b-form-group
                  label="Description"
                  label-for="body"
                  class="font-weight-bold"
                >
                <b-form-textarea
                  id="body"
                  v-model="form.body"
                  type="text"
                  placeholder="add description"
                  class="input-class"
                ></b-form-textarea>
                <small v-if="showErrorInput('body')" class="error-message">Description is required</small>
            </b-form-group>

            <b-form-group>
                <b-button :class="[ disabledBtn ? 'disabled-btn': 'btn' ]" :disabled="disabledBtn" type="submit" class="float-right my-3">Add Comment </b-button>
            </b-form-group>
        </b-form>
    </b-container>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import CommentsServices from '../services/Comments'
  import swal from '../mixins/Alerts'
  import mixinForm from '../mixins/Form'

  export default {
    name:'AddComments',
    mixins:[swal, mixinForm],
    data(){
      return {
        form:{
          name:'',
          email:'',
          body:''
        },
      }
    },
    validations() {
      return {
        form: {
          name: {
            required
          },
          email: {
            required,
            email
          },
          body: {
            required
          },
        }
      }
    },
    computed: {
      disabledBtn(){
        return this.disabledSubmitBtn('name', 'email','body')
      },
    },
    methods: {
      addComment(){
        this.$v.form.$touch();
        
        if(this.$v.form.$invalid) {
          return
        }

        CommentsServices.addComments(this.form)
          .then(() => {
            this.alertMessage('success', 'created')
            this.$bvModal.hide('add-comment') 
            this.form = {}
          })
          .catch(() =>{
            this.alertMessage('success', 'error')
          })
      },
    } 
  }
</script>

<style scoped>

.form-group{
  color: #456d86;
  padding:7px 0px;
}

.btn {
  color: #FFF; 
  background:#456d86;
  border-radius:20px;
  border:none;
}
.disabled-btn{
  color: #FFF;; 
  background: #456d86;
  border-radius:20px ;
  border:none;
}
.disabled-btn:hover{
  cursor:not-allowed
}

.input-class{
  background-color:transparent;
  border:none;
  box-shadow:5px 5px 10px #456d86;
}

.error-message{
  color:#d46868;
}

</style>