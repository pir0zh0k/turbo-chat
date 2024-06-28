<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss">
.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 80px;
  height: 80px;
  border: 5px solid $blue-600;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
.loader:after {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  border: 5px solid $blue-500;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes pulse {
  0%,
  60%,
  100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
}
</style>
