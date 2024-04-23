<script>
export default {
  name: "NavComponent"
}
</script>

<template>
  <nav>
    <router-link class="link"  to="/service">Services</router-link>
    <router-link class="link"  to="/expertises">Expertises</router-link>
    <router-link class="link"  to="/Propos">À Propos de nous</router-link>
    <router-link class="link"  to="/contact">Contact</router-link>
  </nav>
</template>
<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    font-size: 14px;
    margin: 0 8px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Roboto Thin", sans-serif;
    &:hover {
      color: #1da6e0 !important;
    }
  }
}


nav a.router-link-exact-active {
  color: #42b983;
}

</style>