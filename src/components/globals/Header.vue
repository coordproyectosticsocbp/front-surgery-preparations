<script setup>
import {useCurrentTime} from "@/composables/useCurrentTime.js";

const {currentTime} = useCurrentTime()


</script>
<template>
  <header class="d-flex justify-content-between align-items-center py-1 border-bottom bg-custom-navbar">

    <a class="navbar-brand ms-5">
      <img src="@/assets/images/LOGO_CLINICA_BONNADONA_BLANCO.png" width="100">
    </a>
    <div>
      <h4 class="fw-bolder text-white">UBICACIÓN DEL PACIENTE</h4>
    </div>
    <div>
      <h5 class="fw-bolder text-white me-5">
        {{ currentTime.toLocaleString() }}
      </h5>
    </div>

  </header>
</template>
<style scoped>
.bg-custom-navbar {
  background-color: #0085c8;
}
</style>