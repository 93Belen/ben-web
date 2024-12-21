<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref, watch, onUpdated } from 'vue';

const textCode = ref('intro')

gsap.registerPlugin(Draggable, TextPlugin);

onMounted(() => {
  // Draggable
  window.scroll('0px', '0px')
  Draggable.create("#pedal-div", {
  type: "y",
  handle: '.handle',
  bounds: ".container",
  dragResistance: 0.1
});
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
    else if(thisKnob === 'comp'){
      textCode.value = 'resume'
    }
    else if(thisKnob === 'eq'){
      textCode.value = 'tbd'
    }
    else{
      textCode.value = 'intro'
    }
  }
});


})

onUpdated(() => {
// Change text
gsap.to('.linkedin', {
  duration: 4,
  text: "Experience in allocating budget, buying products, business accounting, recruitment, staff schedules, daily sales report... Find out more in my Linkedin!",
  ease: "none",
});
gsap.to('.resume', {
  duration: 4,
  text: "Assistant Team Leader at Whole Foods Market, Barista in Spain, General Manager at Taylor Street Baristas in London, Tour Manager in America and Europe... Download my full Resume here!",
  ease: "none",
});
gsap.to('.tbd', {
  duration: 4,
  text: "I'm open to any opportunity to work at JHS. You woulnd't say no to this face!",
  ease: "none",
});
gsap.to('.intro', {
  duration: 4,
  text: "Hey! My name is Ben and I have over 16 years of experience as a manager in different industries and continents. From the coffee and customer service industry to the music world. From America to Europe, and back! Play with the pedal and find out more about me!",
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
    <!-- Ben Kingston -->
    <div class="w-full flex justify-end text-center h-[20dvh] font-noto font-[800] pt-0 px-6">
      <div class="">
        <h1 class="text-[53.5px] tracking-[-2px]">BEN</h1>
        <p class="text-[19px] tracking-[-0.5px] mt-[-25px]">KINGSTON</p>
      </div>
    </div>
    <!-- Text & Pedal -->
    <div class="md:flex h-[80dvh] grid grid-cols-1 grid-rows-1 md:justify-center md:items-center relative z-[80] oerflow-hidden">
      <div class="md:w-[60vw] col-start-1 md:text-xl md:font-regular row-start-1 z-[0] md:order-last md:h-fit flex flex-col px-8 py-2 md:p-12 md:px-20 z-[99]">
        <p :class="textCode" >Hey! My name is Ben and I have over 16 years of experience as a manager in different industries and continents.
           From the coffee and customer service industry to the music world. From America to Europe, and back!
           Play with the pedal and find out more about me!</p>
        <img v-if="textCode === 'tbd'" class="animate-appear w-[full] md:w-[500px]" src="/bengraphics.png" alt="">
      </div>
      <div class="container col-start-1 row-start-1 z-[99] md:order-1 h-[140dvh] md:h-fit w-full md:static md:w-[40vw] md:min-w-[350px] md:max-w-[450px] md:px-2 md:top-0 md:flex justify-center items-center">
        <div id="pedal-div" class="w-full h-fit md:w-[350px] min-h-[100dvh] md:min-h-[0px] px-6 bg-ben-white/30 backdrop-blur md:backdrop-blur-none rounded-t-[50px] pt-4 md:pt-0 md:bg-transparent">
          <div id="pedal" class="max-h-[60dvh] w-[80%] m-auto">
            <Pedal/>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
