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
    .upcoming{
        color: white;
        margin: calc(50vh - 8em) 0 3em 0;
    }
    .upcoming__label{
        font-weight: 300;
        font-size: 1.8em;
    }
    .upcoming__block__time, .upcoming__block_name{
        display: flex;
        justify-content: space-between;
    }
    .upcoming__block__img{
        width: 18.75em;
    }
    .upcoming__block__img img{
        width: 12.5em;
        height: 12.5em;
        object-fit: cover;
        margin: 0 2.5em 0 0;
    }
    .upcoming__block__content{
        width: calc(100% - 18.75em);
    }
    .upcoming__block{
        position:relative;
        background: #131313;
        padding: 3.125em 2.5em;
        border-radius: 10px;
    }
    .upcoming__block__content{
        padding: 3.15em 0 3.15em 0;
    }
    .upcoming__block_name{
        font-size: 1.5em;
    }
    .upcoming__block_date{
        font-size: 0.85em;
        font-weight: 300;
        padding-right: 1em;
    }
    .upcoming__block__description{
        font-size: 0.875em;
        font-weight: 300;
        margin-top: 1.2em;
    }
    .upcoming__block__time{
        font-size: 1.875em;
        font-weight: 300;
        margin-top: 1em;
    }
    .upcoming__block__more-info{
        padding: 1em;
        transition-duration: .3s;
        color: white;
        margin-top: 0.5em;
    }
    .upcoming__block__more-info:hover{
        color: white;
        background: #232323;
        border-radius: 8px;
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