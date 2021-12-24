<template>
  <div style="width: 60%; text-align: center; margin: auto;" alice>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Calendar
      v-bind:startdate="new Date(2021, 4, 8)"
    ></Calendar>
    <p>- Big Day -</p>
    <BigDay
      v-bind:message="new String('100天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="100"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('200天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="200"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('300天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="300"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('1周年')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="0"
      v-bind:years="1"
    ></BigDay>
    <BigDay
      v-bind:message="new String('400天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="400"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('500天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="500"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('600天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="600"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('700天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="700"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('2周年')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="0"
      v-bind:years="2"
    ></BigDay>
    <BigDay
      v-bind:message="new String('800天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="800"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('900天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="900"
      v-bind:years="0"
    ></BigDay>    <BigDay
      v-bind:message="new String('1000天')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="1000"
      v-bind:years="0"
    ></BigDay>
    <BigDay
      v-bind:message="new String('3周年')"
      v-bind:startdate="new Date(2021, 4, 8)"
      v-bind:days="0"
      v-bind:years="3"
    ></BigDay>

    </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
// import { Divider } from 'ant-design-vue'
import BigDay from './components/Bigday.vue'

export default {
  name: 'App',
  components: {
    Calendar,
    // Divider,
    BigDay,
  },
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
