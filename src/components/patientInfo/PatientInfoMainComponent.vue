<script setup>
import {surgeryStep} from "@/utils/const/surgeryStep.js";
import {onMounted, onUnmounted, ref} from "vue";
import SurgeryPreparationsService from "@/services/surgeryPreparations/SurgeryPreparations.service.js";

const data = ref([]);

const evtSource = new EventSource("https://back-surgery-preparations-production.up.railway.app/preparations/all/");
//const evtSource = new EventSource("http://localhost:3001/preparations/all");
evtSource.onmessage = (event) => {
  if (event.data) {
    data.value = JSON.parse(event.data);
  }
};

const filterData = (filterValue) => {
  return data.value.length ? data.value.filter(item => item.type === filterValue) : []
}

const removeQuota = async (idQuota, typeQuota) => {

  if (typeQuota !== 'TRASLADOS' && typeQuota !== 'SALIDAS') {
    alert('No puede eliminar estas posiciones')
    return false
  }

  const confirmValue = confirm('Desea remover esta posición?')

  if (confirmValue) {
    SurgeryPreparationsService.removeQuota(idQuota)
        .then(() => alert('Paciente Removido'))
        .catch(error => alert('Error al remover el Paciente: -->' + error))
  }
}

onMounted(() => {
  evtSource
});

onUnmounted(() => {
  localStorage.removeItem('authenticated')
})

</script>

<template>
  <div class="container-fluid">
    <div class="row" v-for="column in surgeryStep" :key="column">
      <div class="col">

        <h6 class="text-start text-uppercase mt-2 fw-bolder">
          {{ column.name }}
        </h6>

        <div class="row">
          <div class="col-xl-2" v-for="item in filterData(column.value)" :key="item">
            <div class="card border mb-1 p-1" @click.prevent="removeQuota(item.id, column.name)">
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
                  <span :class="`badge rounded-pill ${item.type === 'WOMENS WARDROBE' || item.type === 'MENS LOCKER ROOM' ? 'badge-aqua'
                  : item.type === 'OPERTING ROOMS' ? 'badge-pink'
                  : item.type === 'RECUPERATION ROOMS' ? 'badge-green'
                  : item.type === 'TRANSFER TO FLOOR' ? 'badge-orange'
                  : item.type === 'OUTPUT' ? 'badge-purple'
                  : ''}`">
                    <img width="7"
                         :src="`https://bonnadona-storage.s3.amazonaws.com/projects/cirugia/iconos/${column.icon}`"/>
                    {{
                      item.type === 'WOMENS WARDROBE' || item.type === 'MENS LOCKER ROOM' ? 'En Vestier'
                          : item.type === 'OPERTING ROOMS' ? 'Quirófano'
                              : item.type === 'RECUPERATION ROOMS' ? 'Recuperación'
                                  : item.type === 'TRANSFER TO FLOOR' ? 'Traslado'
                                      : item.type === 'OUTPUT' ? 'Salida'
                                          : ''
                    }}
                  </span>
                  </h5>
                </div>
              </div>

              <div class="mt-3">
                <ul class="list-unstyled">
                  <li>
                    <p class="fw-bold card-font mb-0">
                      {{
                        item.type === 'WOMENS WARDROBE' || item.type === 'MENS LOCKER ROOM' ? 'Vestier #'
                            : item.type === 'OPERTING ROOMS' ? 'Quirófano #'
                                : item.type === 'RECUPERATION ROOMS' ? 'Sala #'
                                    : item.type === 'TRANSFER TO FLOOR' ? 'Traslado #'
                                        : item.type === 'OUTPUT' ? 'Salida #'
                                            : ''
                      }}
                      <span>
                      {{ item.number_room }}
                    </span>
                    </p>
                  </li>
                  <li>
                    <p class="fw-bold procedure-text card-font mb-0">
                      Cirugía:
                      <span> {{ item.procedure }} </span>
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

.card-font {
  font-size: .85rem;
}
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
.procedure-text {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*white-space: nowrap;*/
}
</style>