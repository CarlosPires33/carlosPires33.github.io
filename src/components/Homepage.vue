<template>
  <div>
    <div class="content">
      <h1>CRUD APP</h1>
      <p>USING MEVN STACK</p>
      <router-link class="btn" :to="{name:'list'}">More info</router-link>
    </div>

    <div class="stack">
        <span>MongoDB</span>
        <span>Express</span>
        <span>Node</span>
        <span>Vue</span>
        <span>Vue Router</span>
        <span>Bootstrap Vue </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Homepage'
  }
</script>

<style>
body.background-page{
  background-image: linear-gradient(#e4e5e6,#00416a);
  background-repeat: no-repeat;
  height: 100vh;
}

.content{
  width:100%;
  position:absolute;
  top:40%;
  text-align: center;
  color: #FFF;
}

.content h1{
  font-size:80px;
}
.content p{
  font-size:30px;
}

.btn{
  border-radius:20px;
  border:2px solid #FFF;
  color:#FFF;
  margin-top:10px;
}
.btn:hover{
  color:#456d86;
  background: #FFF;
  border:hidden;
}

.btn.focus, .btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
a.nav-link.router-link-exact-active.router-link-active.nav-color {
  color: white;
  font-weight: 900;
}

.stack {
  width:100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  color:#FFF;
  text-transform: uppercase;
  position:absolute;
  bottom:0px;
}

.stack span {
  animation: tech 7s linear infinite;
  padding:5px 0px;
  font-size: 13px;
  font-weight: bold;
}

@keyframes tech {
  0%{
    transform: translateY(0);
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  70%{
    opacity: 0;
  }
  100%{
    transform: translateY(-20vh);
    opacity: 0;
  }
}

</style>