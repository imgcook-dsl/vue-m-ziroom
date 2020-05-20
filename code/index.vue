<template>
  <div class="box">
    <div @click="onClick_1" :data-url="item.url" :key="item.index" v-for="(item, index) in data">
      <div class="bd">
        <img class="layer" src="https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png" />
        <img class="bg" :src="item.coverImage" />
        <div class="wrap">
          <img class="riverdinwei" src="https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png" />
          <span class="distance">距离500m</span>
        </div>
      </div>
      <div class="main">
        <span class="title">{{ item.title }}</span>
      </div>
      <div class="ft">
        <div class="block">
          <img class="xianjin" src="https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png" />
          <span class="fashionHome">{{ item.user.userName }}</span>
        </div>
        <div v-if="isReadCountShow(item.readCount)" class="group">
          <img class="favorite" src="https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png" />
          <span class="num">{{ item.readCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';

export default class App extends Vue {
  data: any = [
    {
      title: '小户型卫浴怎样才能装得高大上？',
      coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
      readCount: 200,
      user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
      url: 'https://www.imgcook.com'
    },
    {
      title: '拥有超多功能的40平米简约小公寓了解一下',
      coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
      readCount: 500,
      user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '花花设计工作' },
      url: 'https://www.imgcook.com/docs'
    }
  ];
  constants: any = {};
}
</script>
<style src="./index.scss" lang="scss" />
