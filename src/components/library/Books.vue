<template>
  <div>
    <el-row style="height: 840px;">
      <!--<search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right" v-for="item in books" :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card
          style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px"
          class="book"
          bodyStyle="padding:10px"
          shadow="hover"
        >
          <div class="cover">
            <img :src="item.cover" alt="Cover" />
          </div>
          <div class="info">
            <div class="title">
              <a href>{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data () {
    return {
      books: [
        {
          cover: 'https://images-eu.ssl-images-amazon.com/images/I/41OCVr-5ujL._SY445_QL70_ML2_.jpg',
          title: 'The Picture of Dorian Gray',
          author: 'Oscar Wilde',
          date: '2003-02-04',
          press: 'Penguin Classics; Revised edition ',
          abs:
            'Enthralled by his own exquisite portrait, Dorian Gray makes a Faustian bargain to sell his soul in exchange for eternal youth and beauty.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link,
a:visited,
a:focus {
  color: #3377aa;
}
</style>
