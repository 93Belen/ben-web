<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { onMounted } from 'vue';


gsap.registerPlugin(Draggable);

onMounted(() => {
  Draggable.create("#pedal-div", {
  type: "y",
  bounds: ".container",
  dragResistance: 0.35
});

 gsap.set(".knob", {
        transformOrigin: "center center" // Set the rotation point to the bottom-right corner
    });

Draggable.create(".knob", {
  type: "rotation",
  transformOrigin: "right bottom",
  dragResistance: 0.15
});
})

</script>

<template>
  <div class="w-screen h-screen bg-ben-green overflow-hidden">
    <div class="absolute w-[115vw] left-[-5vw]">
      <Lines/>
    </div>
    <div class="container abolsute top-[40vh] h-[120vh] absolute w-full">
      <div id="pedal-div" class="w-full h-fit px-6 bg-ben-white rounded-[50px] pt-4">
        <div id="pedal">
          <Pedal/>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
