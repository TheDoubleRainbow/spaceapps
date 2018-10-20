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
                <div class="upcoming__block columns" v-for="item in items" :key="item.id">
                    <div class="upcoming__block__img">
                        <img :src="item.rocket.imageURL" alt="rocket">
                    </div>
                    <div class="upcoming__block__content">
                        <div class="upcoming__block_top">
                            <p class="upcoming__block_name">{{item.name}}</p>
                            <p class="upcoming__block_date">{{item.windowstart}}</p>
                        </div>
                        <div class="upcoming__block__description">
                            {{item.missions[0] ? item.missions[0].description : 'No description'}}
                        </div>
                        <div class="upcoming__block__footer">
                            <p class="upcoming__block__time">{{item.windowstart | formatDate}}</p>
                            <a class="upcoming__block__more-info">More info</a>
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
    .upcoming__block__footer, .upcoming__block_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .upcoming__block__img{
        width: 18.75em;
        margin: 2.5em 0 2.5em 0;
    }
    .upcoming__block__img img{
        border-radius: 50%;
        width: 12.5em;
        height: 12.5em;
        object-fit: cover;
    }
    .upcoming__block__content{
        width: calc(100% - 10em);
    }
    .upcoming__block{
        background: #131313;
        padding: 0 2.5em;
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
    },
    filters:{
        formatDate: function(value) {
            let now=new Date().getTime();
            let launchTime=new Date(value).getTime();
            if (value) {
                return moment((new Date(launchTime-now)).toString()).format('DD[d] hh[h] mm[m] ss[s]')
            }
        }
    
    }
};
    
</script>