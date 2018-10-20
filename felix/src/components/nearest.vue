<template>
        <div class="columns">
            <div v-if="nearest" class="column is-6 is-offset-2 nearest">
                <div class="nearest__label">Nearest launch</div>
                <div class="nearest__time">
                    <div class="nearest__time__timer">{{viewTimer}}</div>
                    <div class="nearest__time__date">{{nearest.net}}</div>
                </div>
            <div class="nearest__name">
                {{nearest.name}}
            </div>
            <router-link :to="'/launch/' + nearest.id" class="nearest__more-info">More info</router-link>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
  name: "nearest",
  data() {
    return {
      viewTimer: undefined,
      timer: undefined
    };
  },
  methods: {
    getTimer() {}
  },

  computed: {
    nearest: function() {
      if (this.$store.state.nearest) {
        return this.$store.state.nearest.launches[0];
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.nearest) {
      let now = new Date().getTime();
      let past = new Date(this.nearest.net).getTime();
      this.timer = new Date(now - past);
      this.viewTimer = moment(this.timer.toString().toString()).format(
        "DD[d] hh[h] mm[m] ss[s]"
      );
    }
    setInterval(() => {
      if (this.nearest) {
        let now = new Date().getTime();
        let future = new Date(this.nearest.net).getTime();
        this.timer = new Date(future - now);
        this.viewTimer = moment(this.timer.toString().toString()).format(
          "DD[d] hh[h] mm[m] ss[s]"
        );
      }
    }, 1000);
  }
};
</script>


<style lang="scss">
.nearest {
  margin-top: calc(50vh - 14em);
  color: white;
  font-weight: lighter;
}
.nearest__label {
  font-size: 1.6em;
}
.nearest__time {
  margin: 1.3em 0 0 0;
}
.nearest__time__timer {
  font-size: 3em;
  line-height: 1.2em;
  position: relative;
  left: -3px;
}
.nearest__time__date {
  font-size: 1.2em;
}
.nearest__name {
  font-size: 3em;
  font-weight: normal;
  line-height: 1.2em;
  margin: 0.3em 0 0 0;
}
.nearest__more-info {
  display: inline-block;
  border: 1px solid white;
  padding: 0.6em;
  width: 9.37em;
  text-align: center;
  color: white;
  margin: 1.6em 0 0 0;
}
.nearest__more-info:hover {
  font-weight: 300;
  color: white;
}
</style>

