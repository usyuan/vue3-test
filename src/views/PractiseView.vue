<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')
const btn = ref('click this')

function greet(event) {
  // btn.value = event
  alert(`this ${event}!`)
  console.log(`this ${event}!`)
  
  // `event` is the native DOM event
  //if (event) {
    //console.log(event.target.tagName)
  //}
}  
</script>

<template>
  <h2>修飾符練習：</h2>
  <div class="title">.stop 觸發只到目前事件</div>
  <div @click="greet('is div @click.self')">
    <a href="https://google.com/" target="_blank" @click.stop="greet('is a @click.stop')">{{btn}}</a>
  </div>

  <div class="title">.prevent 不觸發瀏覽器的預設行為</div>
  <a href="https://google.com/" target="_blank" @click.prevent="greet('is a @click.prevent')">{{btn}}</a>

	<div class="title">.self 只有點擊自己的時候在會觸發</div>
  <div @click.self="greet('is div @click.self')">
    {{btn}}
    <a href="https://google.com/" target="_blank" @click.prevent="greet('is a @click.prevent')">{{btn}}</a>
  </div>
  
  <div class="title">.capture 無論觸發的DOM為何，都會優先觸發</div>
  <div @click.capture="greet('is div @click.capture')">
    <a href="https://google.com/" target="_blank" @click.prevent="greet('is a @click.prevent')">{{btn}}</a>
  </div>
  
  <div class="title">.passive 會使 prevent 無效，一定會觸發瀏覽器的預設行為</div>
  <a href="https://google.com/" target="_blank" @click.passive.prevent="greet('is a @click.passive.prevent')">{{btn}}</a>
  
  <div class="title">.once 使事件只會觸發一次</div>
  <button @click.once="greet('is button @click.once')">{{btn}}</button><br>
  <a href="https://google.com/" target="_blank" @click.once.prevent="greet('is a @click.once.prevent')">{{btn}}</a>

  <div class="title">.exact 確定的系統按鍵組合觸發</div>
  按下Ctrl時，同時按其他鍵也會觸發：<button @click.right="greet('is button @click.ctrl')">{{btn}}</button><br>
  只有按下Ctrl、未按其他鍵才會觸發：<button @click.ctrl.exact="greet('is button @click.ctrl.exact')">{{btn}}</button><br>
  未按其他鍵才會觸發：<button @click.exact="greet('is button @click.exact')">{{btn}}</button>


  <div class="title">鼠標按鍵</div>
  .left：<button @click.left="greet('is button @click.left')">{{btn}}</button><br>
  .right：<button @click.right="greet('is button @click.right')">{{btn}}</button><br>
  .middle：<button @click.middle="greet('is button @click.middle')">{{btn}}</button><br>
</template>

<style>
.title {
  min-height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 5px;
}
</style>
