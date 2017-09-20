<template>
  <div class="navigation-menu">
    <nav>
      <ul class="left-menu">
        <li>
          <a href="#">Catalog</a>
          <ul>
            <li>
              <a href="#">High power gizmos</a>
              <ul>
                <li>
                  <a href="#">Electrifying transformers</a>
                </li>
                <li>
                  <a href="#">Dangerous cutting devices</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Low power gizmos</a>
              <ul>
                <li>
                  <a href="#">Cheap-ass batteries</a>
                </li>
                <li>
                  <a href="#">Dubious-quality hand-held fans</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="right-menu">
        <li><a href="#">About us</a>
        </li>
      </ul>
    </nav>
    <h1 class="title">Gizmotron Shop</h1>
    <p>
      Welcome to Gizmotron Shop. Here you will find lots of blah and blah blah blah.
    </p>
    <h2>Sales of the Week!</h2>
    <p>
      Our cheap-ass batteries are cheaper than usual!
    </p>
    <h2>Bloody video of the Week!</h2>
    <p>
      Check on Youtube the latest stupidity a customer did with one of our articles!
    </p>
    <p>
      Do something stupid and send us the video!
    </p>
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
@import './index.scss';

nav {
  ul {
    list-style-type: none;
    padding: 0;
  }
}


</style>
