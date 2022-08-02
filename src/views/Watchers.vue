<script setup>
import { ref,reactive, watch,watchEffect } from 'vue'

let a = ref(0)
let b = ref(2)

const unwatch = watchEffect(()=>{
  console.log(a.value,b.value)
  console.log(document.querySelector('#testFlush').innerText)
}, {
  flush: 'post'　//類似nextTick，監聽回調中訪問更新後的DOM
})
</script>

<template>
  <h2>監聽器練習：</h2>
  <div class="title">flush: 'post' 為監聽回調中訪問更新後的DOM(類似nextTick)</div>
  <span id="testFlush">a - b：{{a}} - {{b}}</span> <button @click="a++;b++;">++</button>
  <br><br>
  停止監聽：<button @click="unwatch()">unwatch</button> 

  
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
