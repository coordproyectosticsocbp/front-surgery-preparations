<script setup>
</script>

<template>
  <footer class="footer mt-auto py-3 bg-body-tertiary d-none d-xl-block">
    <div class="container-fluid">
      <div class="row">
        <div class="col">

          <div class="qr-text-box">
            <p class="mb-0 fs-4">
              ¡Ahora también puedes llevar esta información siempre contigo! Conozca
              el estado de su familiar.
              <span class="text-dark fw-bolder fs-2">
              Escanea Aquí!
            </span>
            </p>
          </div>

          <div class="qr-img-box">
            <img title="Código QR" alt="qrCode" src="../../assets/images/QR_SURGERY_AIRPORT.png">
          </div>

        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>

.qr-text-box {
  position: relative;
  width: 90%;
  text-align: end;
}
.qr-img-box {
  position: fixed;
  bottom: 0;
  right: 0;
}
.qr-img-box img {
  width: 200px;
}
</style>
