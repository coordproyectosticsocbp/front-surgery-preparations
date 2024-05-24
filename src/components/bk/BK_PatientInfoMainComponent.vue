<script setup>
import {surgeryStep} from "@/utils/const/surgeryStep.js";
</script>

<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col border-end" v-for="column in surgeryStep" :key="column">

        <h5 class="text-center text-uppercase mt-3">
          {{ column.name }}
        </h5>

        <hr>

        <div class="card mb-3 p-3" v-for="(item, index) in column.pacientes" :key="index">

          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center">
              <div class="c-details">
                <h6 class="mb-0">
                  {{ item.documentType }}: {{ item.document }}
                </h6>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <h5 class="mb-0">
                  <span :class="`badge rounded-pill ${column.name === 'Vestier Mujeres' || column.name === 'Vestier Hombres' ? 'badge-aqua'
                  : column.name === 'Quirófanos' ? 'badge-pink'
                  : column.name === 'Traslados a Piso' ? 'badge-green'
                  : column.name === 'Salidas' ? 'badge-purple'
                  : column.name === 'Recuperación' ? 'badge-orange'
                  :'bg-secondary'}`">
                    En Quirófano
                  </span>
              </h5>
            </div>
          </div>

          <div class="mt-5">

            <ul class="list-unstyled">
              <li>
                <p class="fw-bold mb-0">
                  Quirófano:
                  <span>
                    {{ item.operatingRoom }}
                  </span>
                </p>
              </li>
              <li>
                <p class="fw-bold">
                  Cirugía:
                  <span>
                    COLGAJO LOCAL DE PIEL
                  </span>
                </p>
              </li>
            </ul>

          </div>

        </div>
      </div>

<!--            <div class="row">
              <div class="col">

                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold mb-0">
                      Cirugía:
                      <span>{{item.document}}</span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold mb-0">
                      Sala:
                      <span>{{item.operatingRoom}}</span>
                    </p>
                  </li>
                  <li>
                    <h5>
                      Estado:
                      <span class="badge text-bg-secondary">
                        En Quirófano
                      </span>
                    </h5>
                  </li>
                </ul>

              </div>
            </div>-->

    </div>
  </div>

</template>

<style scoped>
.card, .card {
  border: none;
  border-radius: 10px;
  background: white;
}

.c-details span {
  font-weight: 300;
  font-size: 13px
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