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
  <div class="w-screen h-[100dvh] bg-ben-green flex flex-col">
    <!-- absolute decorative lines -->
    <div class="absolute w-[100vw] top-[5px] md:h-[200px] opacity-[0.5] z-[0]">
      <Lines/>
    </div>
    <!-- Ben Kingston -->
    <div class="w-full flex justify-end text-center h-[15dvh] font-noto font-[800] p-6">
      <div class="">
        <h1 class="text-[53.5px] tracking-[-2px]">BEN</h1>
        <p class="text-[19px] tracking-[-0.5px] mt-[-25px]">KINGSTON</p>
      </div>
    </div>
    <!-- Text & Pedal -->
    <div class="md:flex h-[85dvh] grid grid-cols-1 grid-rows-1 md:justify-center md:items-center relative z-[80] oerflow-hidden">
      <div class="md:w-[60vw] col-start-1 row-start-1 z-[0] md:order-last md:h-fit flex flex-col justify-center items-center p-8 md:p-12 md:px-20 z-[99]">
        <p>lllorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem </p>
      </div>
      <div class="container col-start-1 row-start-1 z-[99] md:order-1 abolsute top-[-40dvh] h-[180dvh] md:h-fit w-full md:static md:w-[40vw] md:min-w-[350px] md:max-w-[450px] md:px-2 md:top-0 md:flex justify-center items-center">
        <div id="pedal-div" class="w-full h-fit md:w-[350px] min-h-[100dvh] px-6 bg-ben-white/30 backdrop-blur md:backdrop-blur-none rounded-[50px] pt-4 md:pt-0 md:bg-transparent">
          <div id="pedal" class="max-h-[60dvh] w-[90%] m-auto">
            <Pedal/>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
