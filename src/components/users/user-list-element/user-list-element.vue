<template>
  <div class="user-element">
    {{ user.name }} - {{ user.imageUrl }}
  </div>
</template>

<script src="./user-list-element.ts" lang="ts"></script>

<style>
  .user-element {
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 32px;
  }
</style>
