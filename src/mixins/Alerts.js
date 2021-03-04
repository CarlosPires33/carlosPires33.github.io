import swal from 'sweetalert2'

export default {
  methods: {
    alertMessage(icon, title){
      swal.fire({
        icon: icon,
        title: `${title.charAt(0).toUpperCase()}${title.slice(1)}!`,  
        text: `${icon === 'success' ? `Comment has been ${title}`: `Comment has not been ${title}` }` ,
        showConfirmButton: false,
        timer: 1500 
      })
    },
    confirmMessage(callback){
      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#456d86',
        cancelButtonColor: '#d46868',
        confirmButtonText: 'Yes, delete it!'
      }).then(callback)
    },
  }  
}
