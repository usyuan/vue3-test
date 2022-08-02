<script setup>
import { ref } from 'vue'

const btn = ref('click here')

function greet(event) {
  // btn.value = event
  alert(`this is ${event}!`)
  console.log(`this is ${event}!`)
  
  // `event` the native DOM event
  //if (event) {
    //console.log(event.target.tagName)
  //}
}  
</script>

<template>
  <h2>修飾符練習：</h2>
  <div class="title">.stop 觸發只到目前事件</div>
  外層div @click：
  <div class="div-box" @click="greet('div @click')">
    @click.stop：<a href="https://google.com/" target="_blank" @click.stop="greet('a @click.stop')">{{btn}}</a>
  </div>

  外層div @click：
  <div class="div-box" @click="greet('div @click')">
    @click：<a href="https://google.com/" target="_blank" @click="greet('a @click')">{{btn}}</a>
  </div>

  <div class="title">.prevent 不觸發瀏覽器的預設行為</div>
  @click.prevent：<a href="https://google.com/" target="_blank" @click.prevent="greet('a @click.prevent')">{{btn}}</a><br>
  @click：<a href="https://google.com/" target="_blank" @click="greet('a @click')">{{btn}}</a>

	<div class="title">.self 只有點擊自己的時候在會觸發</div>
  外層div @click.self：
  <div class="div-box" @click.self="greet('div @click.self')">
    @click.prevent：<a href="https://google.com/" target="_blank" @click.prevent="greet('a @click.prevent')">{{btn}}</a>
  </div>

  外層div @click：
  <div class="div-box" @click="greet('div @click')">
    @click.prevent：<a href="https://google.com/" target="_blank" @click.prevent="greet('a @click.prevent')">{{btn}}</a>
  </div>
  
  <div class="title">.capture 無論觸發的DOM為何，都會優先觸發</div>
  外層div @click.capture：
  <div class="div-box" @click.capture="greet('div @click.capture')">
    @click.prevent：<a href="https://google.com/" target="_blank" @click.prevent="greet('a @click.prevent')">{{btn}}</a>
  </div>
  
  <div class="title">.passive 會使 prevent 無效，一定會觸發瀏覽器的預設行為</div>
  @click.passive.prevent：<a href="https://google.com/" target="_blank" @click.passive.prevent="greet('a @click.passive.prevent')">{{btn}}</a>
  
  <div class="title">.once 使事件只會觸發一次</div>
  @click.once：<button @click.once="greet('button @click.once')">{{btn}}</button><br>
  @click.once.prevent：<a href="https://google.com/" target="_blank" @click.once.prevent="greet('a @click.once.prevent')">{{btn}}</a>

  <div class="title">.exact 確定的系統按鍵組合觸發</div>
  按下Ctrl時，同時按其他鍵也會觸發 @click.ctrl：<button @click.right="greet('button @click.ctrl')">{{btn}}</button><br>
  只有按下Ctrl、未按其他鍵才會觸發 @click.ctrl.exact：<button @click.ctrl.exact="greet('button @click.ctrl.exact')">{{btn}}</button><br>
  未按其他鍵才會觸發 @click.exact：<button @click.exact="greet('button @click.exact')">{{btn}}</button>


  <div class="title">鼠標按鍵</div>
  @click.left：<button @click.left="greet('button @click.left')">{{btn}}</button><br>
  @click.right：<button @click.right="greet('button @click.right')">{{btn}}</button><br>
  @click.middle：<button @click.middle="greet('button @click.middle')">{{btn}}</button><br>
</template>

<style>
.title {
  min-height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 5px;
}
.div-box{
  border: 1px solid #c3c3c3;
  padding: 5px 2px;
  margin-bottom: 10px;
}
</style>
