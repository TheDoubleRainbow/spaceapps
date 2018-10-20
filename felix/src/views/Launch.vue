<template>
    <div v-if="item" class="container">
        <div class="columns launch">
            <div class="column l__main">
                <div class="columns">
                    <div class="column l__main__photo is-4">
                        <img :src="item.rocket.imageURL" />
                    </div>
                    <div class="column l__main__body is-8">
                        <div class="is-12 l__main__top">
                            {{item.name}}
                        </div>
                        <div class="is-12 l__main__dates">
                            {{item.windowstart == item.windowend ? item.windowstart : `${item.windowstart} - ${item.windowend}`}}
                        </div>
                        <div class="is-12 l__main__text">
                            {{item.missions[0] ? item.missions[0].description : 'No description'}}
                        </div>
                        <div class="is-12 l__main__bottom">
                            <div v-if="viewTimer" class="l__main__bottom__time">{{viewTimer}}</div>
                            <!-- <div class="l__main__bottom__more">
                                <span>Learn more: </span>
                                <a href="#">sdasdsa asd</a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns l__bottom-blocks">
            <div class="column is-8">
                <div class="l__comments white">
                    <div class="l__comments__heading">comments</div>  
                    <form action="" class="comments__form">
                        <div class="control">
                            <input class="l__comments_input input" type="text" placeholder="Text input" name="nikName">
                        </div>
                        <div class="control">
                            <input class="l__comments_input input" type="text" placeholder="Text input" name="message">
                        </div>
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button comments__submit">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button x comments__cancel">Cancel</button>
                            </div>
                        </div>
                    </form>
                    <div class="l__comments__container">
                        <div class="l__coments_item">
                            <div class="l__comments__author">Naruto Uzumaki <span class="coments__published"> 2 days ago </span></div>
                            <div class="l__coments__message">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae minima dolor aperiam architecto dolore fugiat odio? Similique modi quas neque odit! Eius sed, et fugit vel commodi reprehenderit dignissimos amet?
                            </div>
                        </div>
                        <div class="l__coments_item">
                            <div class="l__comments__author">Naruto Uzumaki <span class="coments__published"> 2 days ago </span></div>
                            <div class="l__coments__message">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae minima dolor aperiam architecto dolore fugiat odio? Similique modi quas neque odit! Eius sed, et fugit vel commodi reprehenderit dignissimos amet?
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="column is-4 l__sidebar-wrap">
                <div class="l__sidebar white">
                    sidebar
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.l__main {
  margin-top: 2em;
  background-color: white;
  padding: 2em 3em 2em 3em;
  border-radius: 10px;
}
.l__main__photo img {
  width: 26em;
  height: 16em;
  object-fit: cover;
}
.l__main__photo {
  text-align: center;
}
.l__main__top {
  font-size: 1.5em;
  line-height: 1em;
}
.l__main__dates {
  margin-top: 0.5em;
  font-size: 0.9em;
  font-weight: 300;
  color: #6d6d6d;
}
.l__main__text {
  margin-top: 1em;
  font-weight: 300;
  min-height: 7.3em;
}
.l__main__bottom__time{
    font-size: 1.9em;
    font-weight: lighter;
    padding: 0.2em 0.5em;
    border: 1px solid #131313;
    display: inline-block;
    margin-top: 0.4em;
}
.l__main__bottom{
    display: flex;
    justify-content: space-between;
}
.l__bottom-blocks .column{
    padding: 0;
}
.l__bottom-blocks .white{
    background: white;
    border-radius: 10px;
    margin-top: 1.5em;
}
.l__bottom-blocks .l__sidebar-wrap{
    padding-left: 1.5em;
}
.l__comments{
    padding: 1.5em 2em;
}
.l__comments__heading{
    margin:1em 0;
    font-size: 2em;
    font-weight: 400;
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
}
.l__comments_input{
    margin:.5em 0;
}
.comments__form>.field{
    flex-direction: row-reverse;
    margin-top: .5em;
}
.comments__submit{
    background-color: #ffffff;
    border-color: transparent;
    color: #000;
    border: 1px solid #131313;
}
.comments__cancel{
    border:0;   
    margin-right: 1.2em;
}
.l__coments_item{
    margin-top:2em;
}
.l__comments__author{
    font-size:1.4em;
    font-weight: 400;
    margin-bottom: .2em;
}
.coments__published{
    font-size: 0.7em;
    font-weight: lighter;
}
</style>


<script>
import moment from "moment";

export default {
  name: "launch",
  data() {
    return {
      item: undefined,
      viewTimer: undefined
    };
  },
  methods: {
    getData: function() {
      fetch(`https://launchlibrary.net/1.4/launch/${this.$route.params.id}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.item = res.launches[0];
        });
    }
  },
  created() {
    this.getData();
    setInterval(() => {
      if (this.item) {
        let now = new Date().getTime();
        let future = new Date(this.item.net).getTime();
        this.timer = new Date(future - now);
        this.viewTimer = moment(this.timer.toString().toString()).format(
          "DD[d] hh[h] mm[m] ss[s]"
        );
      }
    }, 1000);
  }
};
</script>

