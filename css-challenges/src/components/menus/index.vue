<template>
  <div class="body">
    <nav>
      <ul class="left-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li class="active">
          <a>Catalog</a>
          <ul>
            <li>
              <a href="#">View full catalog</a>
            </li>
            <li>
              <a>High power gizmos</a>
              <ul>
                <li>
                  <a href="#">Electrifying transformers</a>
                </li>
                <li>
                  <a href="#">Dangerous cutting devices</a>
                </li>
              </ul>
            </li>
            <li class="active">
              <a>Low power gizmos</a>
              <ul>
                <li class="active">
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
<style lang="scss" scoped>

$general-background: #eee;
$nav-background: #cca;
$nav-border: #aa5;
$nav-active: red;
$nav-highlighted: green;
$subnav-background: white;
$subnav-border: #ccc;
$subnav-active: red;

$responsive-sm: 480px;


.body {
  background-color: $general-background;
  z-index: 0;
}

nav {
  border: 2px solid $nav-border;
  background-color: $nav-background;
  padding: 0px;

  // General behaviour
  ul {

    display: inline-block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    @media (max-width: $responsive-sm) {
      width: 100%;
    }

    & > li {
      @media (max-width: $responsive-sm) {
        display: block;
        width: 100%;
        position: static;
      }
      display: inline-block;
      position: relative;

      &.active {
        background-color: $nav-active;
      }

      &:hover {
        background-color: $nav-highlighted;
      }

      & > a {
        padding: 10px;
        display: block;
        text-decoration: none;
      }

      // by default a subitem is hidden
      & > ul {
        @media (max-width: $responsive-sm) {
          width: 100%;
          position: static;
          display: none;
          border-radius: 0;
          padding: 0px;
          border: 0;
        }
        width: 200px;
        position: absolute;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid $subnav-border;
        transition: visibility 0.5s step-end;
        visibility: hidden;
        & > li {
          width: 100%;
        }
      }

      // but when hovered we show it
      &:hover > ul {
        @media (max-width: $responsive-sm) {
          width: 100%;
          position: static;
          display: block;
        }
        transition: visibility 0.1s step-start;
        visibility: visible;
      }
    }
  }

  ul.right-menu {
    float: right;
    @media (max-width: $responsive-sm) {
      float: none;
    }
  }

  // 1st level behaviour
  & > ul {
    & > li {
    }
  }

  // 2nd level behaviour
  & > ul > li > ul {
    background-color: $subnav-background;
    @media (max-width: $responsive-sm) {
      font-size: 0.8em;
    }
    & > li:not(:last-child) {
      border-bottom: 1px solid $subnav-border;
    }
  }

  // 3rd level behaviour
  & > ul > li > ul > li > ul {
    top: 0;
    left: 100%;
    background-color: $subnav-background;
    & > li:not(:last-child) {
      border-bottom: 1px solid $subnav-border;
    }
  }
}
</style>
