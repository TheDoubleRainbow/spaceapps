<template>
    <div class="upcoming">
        <div class="columns is-centered">
            <div class="column is-8">
                <div class="upcoming__label">
                    Upcoming Launches
                </div>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-8">
                <div v-for="item in items" :key="item.id" class="upcoming__block columns">
                    <div class="upcoming__block__img">
                        <img :src="item.rocket.imageURL" alt="rocket">
                    </div>
                    <div class="upcoming__block__content">
                        <div class="upcoming__block_name">
                            <p>Name</p>
                            <p>date</p>
                        </div>
                        <div class="upcoming__block__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum beatae nobis fugiat error itaque fuga facilis eos perspiciatis reprehenderit? Fugiat accusamus adipisci dicta numquam odit aliquid itaque inventore tempora!
                        </div>
                        <div class="upcoming__block__time">
                            <p>time</p>
                            <p>More info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss">
    .nav{
        background: #131313;
        height: 4em;
        padding: 0.8em;
        color: white;
    }
    .nav__name{
        font-size: 1.5em;
        font-weight: 300;
    }
    .nav__link{
        color: white;
        text-align: center;
        margin: 0.4em 0 0 0;
    }
    .nav__link.router-link-exact-active span{
        border-bottom: 1px solid white;
    }
    .nav__link:hover span{
        border-bottom: 1px solid white;
    }
    .nav__link:hover{
        color: white;
    }
    .nav__search input{
        border-radius: 25px;
        padding-left: 1.1em;
    }
    .nav__img{
        height: 1.6em;
        width: 1.6em;
    }
    .nav__name span{
        position: relative;
        top: -0.35em;
        left: 0.6em;
    }
</style>

<script>
    import moment from 'moment'

    export default {
    name: 'upcoming',
    data(){
        return {
            launchesTime:undefined,
            
        }
    },
    methods: {
       
    },
    computed: {
        items: function(){
            if(this.$store.state.apiData){
                return this.$store.state.apiData.launches;
            }else{
                return false;
            }
        }
    },
    created(){
        setTimeout(
            ()=>{
        console.log(this.items)
                
            },
            4000
        )
        console.log(this.items)
    //   foreach(let  item in this.items){

      //      this.launchesTime.push(moment(item.toString()).format('DD[d] hh[h] mm[m] ss[s]'));

       //}
    }
  
};

</script>