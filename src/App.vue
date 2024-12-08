<script setup>
import Pedal from './components/Pedal.vue'
import Lines from './components/Lines.vue'
import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";
import { onMounted } from 'vue';


gsap.registerPlugin(Draggable);

onMounted(() => {
  Draggable.create("#pedal", {
  type: "y",
  bounds: ".container"
});
})

</script>

<template>
  <div class="w-screen h-screen bg-ben-green overflow-hidden">
    <div class="absolute w-[115vw] left-[-5vw]">
      <Lines/>
    </div>
    <div class="container abolsute top-[40vh] h-[120vh] absolute w-full">
      <div id="pedal" class="w-full h-fit bg-ben-white rounded-[50px] pt-4">
        <Pedal/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
