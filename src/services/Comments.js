import Apiservice from './Api'

export default {
  getComments(){
    return Apiservice().get('comments')
  },
  addComments(params){
    return Apiservice().post('comments', params)
  },
  getComment(id){
    return Apiservice().get(`comments/${id}`)
  },
  updateComment(id, params){
    return Apiservice().put(`comments/${id}`, params)
  },
  deleteComment(id){
    return Apiservice().delete(`comments/${id}`)
  },
}