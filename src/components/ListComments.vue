<template >
  <div class="background-page">
      <b-container>
          <b-row>
            <b-col>
              <h2 class="text-center my-5">All Comments</h2>
              <custom-tbl :items="data" :fields="fields">
                  <template v-slot:actions="data">
                    <div class="float-right d-flex">
                        <router-link v-b-tooltip.hover title="edit comment" class="far fa-edit icon-edit" :to="{name:'edit', params: {id: data.item._id}}"></router-link>
                        <i class="fas fa-trash ml-2 icon-delete" v-b-tooltip.hover title="delete comment"  @click="deleteItem(data.item._id)"></i>
                    </div>
                </template>
              </custom-tbl>
              <b-button 
                  v-b-tooltip.hover title="add comment"
                  v-b-modal.add-comment
                  class="btn float-right btn-add"
                >
                  <i class="fas fa-plus"></i>
              </b-button>
            </b-col>  
          </b-row>
      </b-container>
      <b-modal @hide="getData" id="add-comment" title="Add Comments" class="text-center" centered >
          <add-comments />
      </b-modal>
  </div>
</template>

<script>
  import AddComments from './AddComments'
  import CustomTbl from '../customs/CustomTbl'
  import swal from '../mixins/Alerts'
  import CommentsServices from '../services/Comments'

  export default {
    name:'ListComments',
    components:{
      AddComments,
      CustomTbl,
    },
    mixins:[swal],
    data(){
      return {
        data: [],
        fields: [
          {
            key:'name',
            label:'Name',
            sortable:true
          },
          {
            key:'email',
            label:'Email',
            sortable:true
          },
          {
            key:'body',
            label:'Description',
            sortable:true
          },
          {
            key:'actions',
            label:' ',
            sortable:false
          }
        ]
      }
    },
    mounted(){
      this.getData();
    },
    methods: {
      getData(){
        CommentsServices.getComments()
          .then(({data})=>{
            this.data = data
          })
      },
      deleteItem(id){
        this.confirmMessage((result)=>{
            if(result.isConfirmed){
              CommentsServices.deleteComment(id)
                .then(()=> {
                  this.data.filter(item => item.id !== id)
                  this.getData();
                })
                this.alertMessage('success','deleted')
                }else {
                  this.alertMessage('error','deleted')   
                }
          }
        )
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

.btn{
  color:white;
}

.btn:hover{
  text-decoration: none;
}
.btn-add{
  background:#456d86;
  border:none;
}
.icon-edit{
  color: #456d86;
  cursor: pointer;
}
.icon-delete{
  color: #456d86;
  cursor: pointer;
}
::v-deep .modal-footer {
  display:none;
}

::v-deep .modal-header{
  background-color:#456d86;
  color:#FFF;
}
h2{
  color:#456d86;
  font-weight: bold;
}
::v-deep .close{
  color:#FFF;
  text-shadow: none;
  opacity: 1;
}
</style>