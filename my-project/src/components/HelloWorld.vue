<style lang="scss" scoped="" type="text/css" >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home-contain {
   div {
    color: red;
   }
}
.main-contain {
  width: 800px;
  margin: 0 auto;
}

</style>
<style lang="scss" scoped="" type="text/css">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .movie-card {
    width: 200px;
    display: inline-block;
    margin:0;
  }
  img {
    width: 180px;
  }
</style>
<template>
  <div class="main-contain">
    <router-link to="/count">Go to echart</router-link>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>

    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="最近热映" name="first">
        <ul>
          <li v-for="(site, index) in sites" :key="index" class="movie-card" ss="card">
            <img :src="url"/>
            <div>{{site.name}}</div>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="全部电影" name="second">
      </el-tab-pane>
      <router-view></router-view>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: { },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName2: 'first',
      url: require('../assets/demo.png'),
      sites: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' },
        { name: 'Taobao' }
      ]
    }
  },
  created () {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
