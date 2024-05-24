<script setup>
import {surgeryStep} from "@/utils/const/surgeryStep.js";
import {computed, onMounted, ref} from "vue";

const data = ref([]);

const evtSource = new EventSource("http://localhost:3001/preparations/all");
evtSource.onmessage = (event) => {
  if (event.data) {
    data.value = JSON.parse(event.data);
  }
};

const vestierW = computed(() => {
  return data.value.filter((item) => item.type === "WOMENS WARDROBE" || item.type === "MENS LOCKER ROOM");
});
/*const vestierM = computed(() => {
  return data.value.filter((item) => item.type === "MENS LOCKER ROOM");
});*/
const operatingRooms = computed(() => {
  return data.value.filter((item) => item.type === "OPERTING ROOMS");
});
const recuperations = computed(() => {
  return data.value.filter((item) => item.type === "RECUPERATION ROOMS");
});
const trasnfers = computed(() => {
  return data.value.filter((item) => item.type === "TRANSFER TO FLOOR");
});
const outputs = computed(() => {
  return data.value.filter((item) => item.type === "OUTPUT");
});

onMounted(() => {
  evtSource;
});
</script>

<template>
  <div class="container-fluid">
    <div class="row" v-for="column in surgeryStep" :key="column">
      <div class="col">

        <h5 class="text-start text-uppercase mt-2 fw-bolder">
          {{ column.name }}
        </h5>

        <div class="row" v-if="column.name === 'Vestier Mujeres y Hombres'">
          <div class="col-xl-2" v-for="(item, index) in vestierW"
               :key="item"
          >
            <div class="card border mb-1 p-1">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                  <span class="badge rounded-pill badge-aqua">
                    <img width="7"
                         src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/women+occupy.svg"/>
                    En Vestier
                  </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      VESTIER M #:
                      <span>
                      {{ item.number_room }}
                    </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

<!--        <div class="row" v-if="column.name === 'Vestier Hombres'">
          <div class="col-xl-2" v-for="(item, index) in vestierM"
               :key="item"
          >
            <div class="card mb-1 p-2 border">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                          <span class="badge rounded-pill badge-aqua">
                            <img width="7"
                                 src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/women+occupy.svg"/>
                            En Vestier
                          </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      VESTIER H #:
                      <span>
                              {{ item.number_room }}
                            </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>-->

        <div class="row" v-if="column.name === 'Quirófanos'">
          <div class="col-xl-2" v-for="(item, index) in operatingRooms"
               :key="item">
            <div class="card border mb-1 p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                          <span class="badge rounded-pill badge-pink">
                            <img width="18"
                                 src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/photo+occupy.svg"/>
                            Quirófanos
                          </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      QUIRÓFANO #:
                      <span>
                              {{ item.number_room }}
                            </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="column.name === 'Recuperación'">
          <div class="col-xl-2" v-for="(item, index) in recuperations"
               :key="item"
          >
            <div class="card border mb-1 p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                                  <span class="badge rounded-pill badge-green">
                                    <img width="18"
                                         src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/stretcher+occupy.svg"/>
                                    Recuperación
                                  </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      RECUPERACIÓN #:
                      <span>
                                      {{ item.number_room }}
                                    </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="column.name === 'Traslados a Piso'">
          <div class="col-xl-2" v-for="(item, index) in trasnfers"
               :key="item"
          >
            <div class="card border mb-1 p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                                  <span class="badge rounded-pill badge-purple">
                                    <img width="18"
                                         src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/bed+occupy.svg"/>
                                    Traslado
                                  </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      TRASLADO #:
                      <span>
                                      {{ item.number_room }}
                                    </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="column.name === 'Salidas'">
          <div class="col-xl-2" v-for="(item, index) in outputs"
               :key="item"
          >
            <div class="card border mb-1 p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <div class="c-details">
                    <h5 class="mb-0">
                      {{ item.patient_document_number }}
                    </h5>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <h5 class="mb-0">
                                  <span class="badge rounded-pill badge-orange">
                                    <img width="15"
                                         src="https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/wheelchair+occupy.svg"/>
                                    Salida
                                  </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      SALIDA #:
                      <span>
                                      {{ item.number_room }}
                                    </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold">
                      Cirugía:
                      <span> POR DEFINIR </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card,
.card {
  border: none;
  border-radius: 10px;
  background: white;
}

.c-details span {
  font-weight: 300;
  font-size: 13px;
}

.badge-aqua {
  background: rgb(102, 196, 175);
}

.badge-pink {
  background: rgb(243, 139, 100);
}

.badge-green {
  background: rgb(158, 185, 103);
}

.badge-orange {
  background: rgb(240, 179, 49);
}

.badge-purple {
  background: rgb(166, 124, 184);
}
</style>
