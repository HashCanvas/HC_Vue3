<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" aria-label="Close modal">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">

          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"><img src="../../../assets/img/landing-page/modal/close_button.png" /></button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
          </slot>

        </section>

        <footer class="modal-footer">
          <slot name="footer">

          </slot>
        </footer>
      </div>
    </div>
  </transition>

</template>
<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 840px;
    height: 700px;
    top: 50%;
    left: 50%;
    border-radius: 15px;
    padding: 40px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    color: #304156;
  }

  .modal-header {
    position: relative;
    justify-content: space-between;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #000;
    background-color: transparent;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .modal p {
    color: black;
  }
</style>