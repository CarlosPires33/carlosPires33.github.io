<template>
  <div>
      <div v-if="!!hasItems">
        <div class="float-right py-2">
          <b-form-group class="has-feedback">
              <b-form-input
                v-model="search"
                type="search" 
                placeholder="search..."
                class="search-input"
              >
            </b-form-input>
          </b-form-group>
        </div>     
        <b-table :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="search" >
            <template v-for="slot in Object.keys($scopedSlots)" v-slot:[toCellName(slot)]="props">
                <slot v-bind="props" :name="slot" />
            </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="hasItems"
            :per-page="perPage">
        </b-pagination>
       </div>
       <div v-else class="py-5">
          <b-jumbotron>
            <h4>No Data</h4>
            <p>Please add a comment</p>
          </b-jumbotron> 
       </div>
  </div>
</template>

<script>
  export default {
    name:'CustomTbl',
    props: {
      items: {
        type: Array,
      },
      fields: {
        type: Array,
      },
      perPage: {
        type: Number,
        default: 5
      },

    },
    data(){
      return {
        currentPage:1,
        search:'',
        searchIcon:'<i class="fas fa-search"></i>'
      }
    },
    computed: {
      hasItems(){
        return this.items.length;
      }
    },
    methods: {
      toCellName (slot) {
        return `cell(${slot})`
      }
    }
  }
</script>

<style scoped>

.search-input{
  background: transparent;
  border-radius:20px;
  border:1px solid #456d86;
  margin-bottom:10px;
}

::v-deep .page-link {
    color:#456d86;
    border: 1px solid #dee2e6;
}
::v-deep .page-item.active .page-link {
    background-color: #456d86;
    border-color: #456d86;
}
::v-deep thead{
  background-color: #456d86;
  color:#FFF;
}
::v-deep tbody {
  color: #456d86;
}
::v-deep .table.b-table > thead > tr > [aria-sort=none]{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.9' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e")
}
::v-deep .table.b-table > thead > tr > [aria-sort=ascending]{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.9' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e")
}
::v-deep .table.b-table > thead > tr > [aria-sort=descending]{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.9' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e")
}
</style>