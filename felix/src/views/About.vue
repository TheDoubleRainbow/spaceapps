<template>
  <div class="about">
    <!--<h1>This is an about page</h1>-->
    <div class="telegram__container">
      <iframe id="tgw_5bcc36e183ba88e7498b4567" frameborder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no" width="100%" height="540px" async></iframe>
    </div>
  </div>
</template>
<script>


export default {
  name: "about",
  data() {
    return {
      
    };
  },
  methods: {
    
  },

  computed: {
    
  },
  created() {
    setTimeout(()=>{
      document.getElementById("tgw_5bcc36e183ba88e7498b4567").setAttribute("src","https://tgwidget.com/channel/v2.0/?id=5bcc36e183ba88e7498b4567")
    },500)    
   
  }
};

</script>

<style>
.telegram__container{
  max-width: 500px;
  margin: auto;
  margin-top:4em;
}
</style>
