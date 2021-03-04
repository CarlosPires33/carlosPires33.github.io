<template>
  <div class="background-page">
    <b-container>
        <h2 class="text-center my-5">Edit Comments</h2>
        <b-row>
          <b-col class="card ml-2">
              <b-form @submit.prevent="editComment" class="w-75 form-style" >
                  <b-form-group
                      label="Name"
                      label-for="edit-name"
                      class="font-weight-bold"
                   >
                      <b-form-input
                        id="edit-name"
                        v-model="form.name"
                        type="text"
                        class="input-class"
                      ></b-form-input>
                      <small v-if="showErrorInput('name')" class="error-message">Name is required</small>
                  </b-form-group>

                  <b-form-group
                      label="Email"
                      label-for="edit-email"
                      class="font-weight-bold"
                  >
                      <b-form-input
                        id="edit-email"
                        v-model="form.email"
                        type="email"
                        class="input-class"
                      ></b-form-input>
                      <small v-if="showErrorInput('email') || !$v.form.email.email" class="error-message">Valid Email is required</small>
                  </b-form-group>
                  
                  <b-form-group
                      label="Description"
                      label-for="edit-body"
                      class="font-weight-bold"
                  >
                    <b-form-textarea
                        id="edit-body"
                        v-model="form.body"
                        type="text"
                        rows="7"
                        class="input-class"
                      ></b-form-textarea>
                      <small v-if="showErrorInput('body')" class="error-message">Description is required</small>
                  </b-form-group>
                  
                  <b-form-group class="float-right">
                      <router-link :to="{name:'list'}"> <b-button type="submit" class="edit-btn"> Go back </b-button></router-link>
                      <b-button :class="[ disabledBtn ? 'disabled-btn': 'btn' ]" :disabled="disabledBtn" type="submit" class="ml-2"> Edit Comment </b-button>
                  </b-form-group>
              </b-form>
          </b-col>
        </b-row>
        
    </b-container>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import swal from '../mixins/Alerts'
  import CommentsServices from '../services/Comments'
  import mixinForm from '../mixins/Form'

  export default {
    name:'EditComments',
    mixins:[swal, mixinForm],
    data(){
      return{
        form:{
          name:'',
          email:'',
          body:''
        } 
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
    mounted(){
      this.getComment()
    },
    computed: {
      disabledBtn(){
        return this.disabledSubmitBtn('name', 'email','body')
      },
    },
    methods:{
      getComment(){
        CommentsServices.getComment(this.$route.params.id)
          .then(({data}) => { this.form = data;})
          .catch(error => {console.error(error)})
      },
      editComment(){
        this.$v.form.$touch();
        
        if(this.$v.form.$invalid) {
          return
        }
        CommentsServices.updateComment(this.$route.params.id, this.form)
          .then(() => {
              this.alertMessage('success', 'updated')
              this.$router.push({name:'list'})
          })
          .catch(() => { 
            this.alertMessage('error', 'updated')
          })
      }
    }
  }
</script>

<style scoped>

.background-page{
  background-image: linear-gradient(#FFF,#e4e5e6,#00416a);
  background-repeat: no-repeat;
  height:100vh;
}

.card{
   background-color: transparent;
   border:none;
   display:flex;
   flex-direction: column;
   align-items: center;
   color: #456d86;
}
.form-style{
  padding:20px 20px;
  box-shadow:10px 10px 20px #456d86;
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
h2{
  color:#456d86;
  font-weight: bold;
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