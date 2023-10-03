<template>
  <div class="notificacoes">
    <article class="message is-success">
      <div class="message-header">Atenção</div>
      <div class="message-body">Aqui vai um texto de notificaco bem bacana</div>
    </article>
    <article class="message is-warning">
      <div class="message-header">Atenção</div>
      <div class="message-body">Aqui vai um texto de notificaco bem bacana</div>
    </article>
    <article class="message is-danger">
      <div class="message-header">Atenção</div>
      <div class="message-body">Aqui vai um texto de notificaco bem bacana</div>
    </article>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Notificacoes",
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 2;
}
</style>