<template>
  <div style="width: 60%; text-align: center; margin: auto;" alice>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Calendar
      v-bind:message="this.message"
      v-bind:startdate="this.startdate"
    ></Calendar>
    <p>- Big Day -</p>
    <BigDay
      v-bind:message="new String('100天')"
      v-bind:startdate="this.startdate"
      v-bind:days="100"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('200天')"
      v-bind:startdate="this.startdate"
      v-bind:days="200"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('300天')"
      v-bind:startdate="this.startdate"
      v-bind:days="300"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('1周年')"
      v-bind:startdate="this.startdate"
      v-bind:days="0"
      v-bind:years="1"
    ></BigDay>
    <BigDay
      v-bind:message="new String('400天')"
      v-bind:startdate="this.startdate"
      v-bind:days="400"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('500天')"
      v-bind:startdate="this.startdate"
      v-bind:days="500"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('600天')"
      v-bind:startdate="this.startdate"
      v-bind:days="600"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('700天')"
      v-bind:startdate="this.startdate"
      v-bind:days="700"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('2周年')"
      v-bind:startdate="this.startdate"
      v-bind:days="0"
      v-bind:years="2"
    ></BigDay>
    <BigDay
      v-bind:message="new String('800天')"
      v-bind:startdate="this.startdate"
      v-bind:days="800"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('900天')"
      v-bind:startdate="this.startdate"
      v-bind:days="900"
      v-bind:years="0"
    ></BigDay>    <BigDay
      v-bind:message="new String('1000天')"
      v-bind:startdate="this.startdate"
      v-bind:days="1000"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('3周年')"
      v-bind:startdate="this.startdate"
      v-bind:days="0"
      v-bind:years="3"
    ></BigDay>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="(msg, index) in this.data" :key="index" >
        <BigDay
          v-bind:message="msg + new String('周年')"
          v-bind:startdate="this.startdate"
          v-bind:days="0"
          v-bind:years="msg"
        ></BigDay>
      </div>
    </div>
    </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
// import { Divider } from 'ant-design-vue'
import BigDay from './components/Bigday.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 4,
      data: [],
      busy: false
    }
  },
  props: {
    message: String,
    startdate: Date
  },
  components: {
    Calendar,
    // Divider,
    BigDay,
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0; i < 10; i++) {
          this.data.push(this.count++);
        }
        this.busy = false;
      });
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
