<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import Linkedin from './components/Linkedin.vue'
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref, watch, onUpdated } from 'vue';

const textCode = ref('intro')
const bounce = ref(null)

gsap.registerPlugin(Draggable, TextPlugin);

onMounted(() => {
  // Draggable
  window.scroll('0px', '0px')
  Draggable.create("#pedal-div", {
  type: "y",
  handle: '.handle',
  bounds: ".container",
  dragResistance: 0.1,
  onDrag: () => {
    bounce.value = false
  }
});
setTimeout(() => {
  if(bounce.value === null){
    bounce.value = true
  }
}, 2000)
// Turn knob around center axis
 gsap.set(".knob", {
        transformOrigin: "center center"
    });
// Turn knob
Draggable.create(".knob", {
  type: "rotation",
  transformOrigin: "right bottom",
  dragResistance: 0.15,
  onDrag: (e) =>{
    const thisKnob = e.target.closest('g').id
    console.log(thisKnob)
    if(thisKnob === 'volume'){
      textCode.value = 'linkedin'
    }
    if(thisKnob === 'comp'){
      textCode.value = 'resume'
    }
    if(thisKnob === 'eq'){
      textCode.value = 'img'
    }
    if(thisKnob === 'blend'){
      textCode.value = 'intro'
    }
  }
});


})

const dirtClick = (e) => {
  const group = e.target.closest('g')
      if(group.id === 'dirt'){
        console.log('dirt')
        textCode.value = 'contact'
      }
}

onUpdated(() => {
// Change text
gsap.to('.linkedin', {
  duration: 4,
  text: "From the coffee and customer service industry to the <span class='inline-flex inline-flex  bg-orange p-[1px]'>music world</span>. Find out more in my <span class='inline-flex  bg-pink p-[1px] flex w-fit gap-2 justify-center items-center'>Linkedin or download my Resume! <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3.11915 0.0071234C2.57079 -0.0586787 2.07293 0.332504 2.00712 0.880855L0.934816 9.81675C0.869014 10.3651 1.2602 10.863 1.80855 10.9288C2.3569 10.9946 2.85477 10.6034 2.92057 10.055L3.87373 2.11202L11.8167 3.06518C12.3651 3.13099 12.863 2.7398 12.9288 2.19145C12.9946 1.6431 12.6034 1.14523 12.055 1.07943L3.11915 0.0071234ZM14.7863 14.3822L3.78632 0.382179L2.21368 1.61782L13.2137 15.6178L14.7863 14.3822Z' fill='black'/></svg></span>",
  ease: "none",
});
gsap.to('.resume', {
  duration: 4,
  text: "Manager at Whole Foods and Home Depot, Barista in <span class='inline-flex bg-orange p-[1px]'>Spain</span>, General Manager for Taylor Street Baristas in <span class='inline-flex bg-pink p-[1px]'>London</span>, Tour Manager across <span class='inline-flex bg-blue p-[1px]'>America</span> and Europe...",
  ease: "none",
});
gsap.to('.img', {
  duration: 2,
  text: "Open to any opportunity at <span class='inline-flex bg-orange p-[1px] font-bold'>JHS</span>!",
  ease: "none",
});
gsap.to('.intro', {
  duration: 4,
  text: "Hey! My name is <span class='inline-flex bg-pink p-[1px]'>Ben</span> and I have <span class='inline-flex bg-orange p-[1px]'>19 years</span> of management experience in a variety of industries. Play with the pedal and find out more about me!",
  ease: "none",
});
gsap.to('.contact', {
  duration: 4,
  text: "<span class='inline-flex bg-pink p-[1px]'>Call me</span>: (913) 954-8575 or <span class='inline-flex bg-orange p-[1px]'>Email me</span>: 84benkingston@gmail.com",
  ease: "none",
});
})

</script>

<template>
  <div class="w-screen h-[100dvh] bg-ben-green flex flex-col">
    <!-- absolute decorative lines -->
    <div class="absolute w-[100vw] top-[5px] md:h-[200px] opacity-[0.5] z-[0]">
      <Lines/>
    </div>
    <div class="flex w-screen h-[20dvh] justify-between">
      <!-- Linkedin -->
      <div class="w-[70px] self-start z-[99999]">
       <a target="_blank" href="https://www.linkedin.com/in/ben-kingston-60025516a/"> <Linkedin/> </a>
      </div>
      <!-- Ben Kingston -->
      <div class="w-fit flex text-center font-noto font-[800] pt-0 px-6">
        <div class="">
          <h1 class="text-[53.5px] tracking-[-2px]">BEN</h1>
          <p class="text-[19px] tracking-[-0.5px] mt-[-25px]">KINGSTON</p>
        </div>
      </div>
    </div>
    <!-- Text & Pedal -->
    <div class="md:flex h-[80dvh] grid grid-cols-1 grid-rows-1 md:justify-center md:items-center relative z-[80] oerflow-hidden">
      <div class="md:w-[60vw] col-start-1 text-lg md:text-2xl font-regular row-start-1 z-[0] md:order-last md:h-fit flex flex-col px-4 py-2 md:p-12 md:px-20 z-[99]">
        <p :class="textCode" class="inline" ></p>
        <img v-if="textCode === 'img'" class="animate-appear w-[90%] md:w-[500px]" src="/bengraphics.png" alt="">
      </div>
      <div class="container col-start-1 row-start-1 z-[99] md:order-1 h-[140dvh] md:h-fit w-full md:static md:w-[40vw] md:min-w-[350px] md:max-w-[450px] md:px-2 md:top-0 md:flex justify-center items-center">
        <div id="pedal-div" :class="bounce ? 'animate-bounce' : ''" class="w-full md:animate-none  h-fit md:w-[350px] min-h-[100dvh] md:min-h-[0px] px-6 bg-ben-white/30 backdrop-blur md:backdrop-blur-none rounded-t-[50px] pt-4 md:pt-0 md:bg-transparent">
          <div @click="dirtClick" id="pedal" class="max-h-[60dvh] w-[80%] m-auto">
            <Pedal/>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
