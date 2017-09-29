<template>
  <div class="navigation-menu">
    <nav>
      <ul class="left-menu">
        <li>
          <router-link to="menus">Menus</router-link>
        </li>
        <li>
          <router-link to="advanced_selectors">Advanced selectors</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation-menu',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
