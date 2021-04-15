<template>
  <div class="hello">Hello! You can see users there:</div>
  <div v-if="isUsersLoading" class="loader">
    Loading...
  </div>
  <ul v-else-if="users.length > 0">
    <li v-for="(user, loopIndex) in users" :key="loopIndex">
      <user-list-element :user="user"/>
    </li>
  </ul>
  <div v-else class="no-users">
    <button @click="loadUsers">Load users</button>
  </div>
</template>

<script src="./users.view.ts" lang="ts"></script>
