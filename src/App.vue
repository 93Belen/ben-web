<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { onMounted } from 'vue';


gsap.registerPlugin(Draggable);
onMounted(() => {
  window.scroll('0px', '0px')
  Draggable.create("#pedal-div", {
  type: "y",
  handle: '.handle',
  bounds: ".container",
  dragResistance: 0.3
});

 gsap.set(".knob", {
        transformOrigin: "center center"
    });

Draggable.create(".knob", {
  type: "rotation",
  transformOrigin: "right bottom",
  dragResistance: 0.15
});
})

</script>

<template>
  <div class="w-screen h-screen md:min-h-[700px] bg-ben-green overflow-hidden flex flex-col">
    <div class="absolute w-[100vw] top-[5px] md:h-[200px] opacity-[0.5] z-[0]">
      <Lines/>
    </div>
    <div class="w-full flex justify-end text-center h-[20vh] font-noto font-[800] p-6">
      <div class="">
        <h1 class="text-[53.5px] tracking-[-2px]">BEN</h1>
        <p class="text-[19px] tracking-[-0.5px] mt-[-25px]">KINGSTON</p>
      </div>
    </div>
    <div class="md:flex md:h-[80vh] md:justify-center md:items-center relative z-[80]">
      <div class="container z-[999] abolsute top-[0vh] h-[150vh] md:h-fit absolute w-full md:static md:w-[40vw] md:min-w-[350px] md:max-w-[450px] md:px-2 md:top-0 md:flex justify-center items-center">
        <div id="pedal-div" class="w-full h-fit md:w-[350px] min-h-[100vh] px-6 bg-ben-white/30 backdrop-blur rounded-[50px] pt-4 md:pt-0 md:bg-transparent">
          <div id="pedal" class="min-h-[60vh] w-[80%] m-auto">
            <Pedal/>
          </div>
      </div>
    </div>
    <div class="md:w-[60vw] md:h-fit flex justify-center items-center p-8 md:p-12 md:px-20 z-[99]">
      <p>lllorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem </p>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
