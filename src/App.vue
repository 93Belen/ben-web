<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import Linkedin from './components/Linkedin.vue'
import OrangeGraphic from './components/OrangeGraphic.vue'
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
  text: "From the coffee and customer service industry to the <span class='inline-flex inline-flex  bg-orange   '>music world</span>. Find out more in my <span class='inline-flex  bg-blue    flex w-fit gap-2 justify-center items-center'>Linkedin</span> or download my <span class='inline-flex  bg-pink    flex w-fit gap-2 justify-center items-center'>Resume! <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3.11915 0.0071234C2.57079 -0.0586787 2.07293 0.332504 2.00712 0.880855L0.934816 9.81675C0.869014 10.3651 1.2602 10.863 1.80855 10.9288C2.3569 10.9946 2.85477 10.6034 2.92057 10.055L3.87373 2.11202L11.8167 3.06518C12.3651 3.13099 12.863 2.7398 12.9288 2.19145C12.9946 1.6431 12.6034 1.14523 12.055 1.07943L3.11915 0.0071234ZM14.7863 14.3822L3.78632 0.382179L2.21368 1.61782L13.2137 15.6178L14.7863 14.3822Z' fill='black'/></svg></span",
  ease: "none",
});
gsap.to('.resume', {
  duration: 4,
  text: "Manager at Whole Foods and Home Depot, Barista in <span class='inline-flex bg-orange   '>Spain</span>, General Manager for Taylor Street Baristas in <span class='inline-flex bg-pink   '>London</span>, Tour Manager across <span class='inline-flex bg-blue   '>America</span> and Europe...",
  ease: "none",
});
gsap.to('.img', {
  duration: 2,
  text: "Open to any opportunity at <span class='inline-flex bg-orange    font-bold'>JHS</span>!",
  ease: "none",
});
gsap.to('.intro', {
  duration: 4,
  text: "Hey! My name is <span class='inline-flex bg-pink'>Ben</span> and I have <span class='inline-flex bg-orange   '>19 years</span> of management experience in a variety of industries. Play with the pedal and find out more about me!",
  ease: "none",
});
gsap.to('.contact', {
  duration: 2,
  text: "Call me <span class='inline-flex bg-pink'>(913) 954-8575</span> or Email me <span class='inline-flex bg-orange   '>84benkingston@gmail.com</span>",
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
    <div class="flex w-screen h-[20dvh] md:h-[10vh] justify-between">
      <!-- Linkedin -->
      <div class="relative flex z-[99999] items-start">
        <div class="md:w-[70px] w-[60px]">
          <a target="_blank" href="https://www.linkedin.com/in/ben-kingston-60025516a/"> <Linkedin/> </a>
        </div>
        <!-- Resume -->
        <div class="w-fit px-2 h-[60px] md:h-[70px] bg-orange text-black text-xl flex justify-center items-center text-center">
          <div class="absolute w-[60px] h-[40px] bg-pink z-[5] skew-y-12"></div>
          <a class="z-[15]" href="" download>Resume</a>
        </div>
        </div>
      <!-- Ben Kingston -->
      <div class="w-fit flex text-center items-start font-noto justify-start font-[800] pt-0 px-6">
        <div class="flex flex-col justify-start">
          <h1 class="text-[53.5px] tracking-[-2px] mt-[-15px] md:mt-[-5px]">BEN</h1>
          <p class="text-[19px] tracking-[-0.5px] mt-[-25px]">KINGSTON</p>
        </div>
      </div>
    </div>
    <!-- Text & Pedal -->
    <div class="md:flex h-[80dvh] md:h-[90vh] md:max-h-[850px] grid grid-cols-1 grid-rows-1 md:justify-center md:items-center relative z-[80] oerflow-hidden">
      <div class="md:w-[60vw] col-start-1 text-lg md:text-2xl font-regular justify-start row-start-1 z-[0] md:order-last md:h-full flex flex-col px-4 py-2 md:p-12 md:px-20 z-[99]">
        <!-- ORANGE GRAPHIC  -->
        <div v-if="textCode !== 'img'" class="z-0 w-[40vw] mt-[10vh] hidden md:block absolute m-auto opacity-[0.2] rotate-12">
          <OrangeGraphic/>
        </div>
        <p :class="textCode" class="inline z-[5] md:m-auto h-fit" ></p>
        <img v-if="textCode === 'img'" class="animate-appear md:m-auto w-[90%] md:w-[500px] z-[10]" src="/bengraphics.png" alt="">
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
