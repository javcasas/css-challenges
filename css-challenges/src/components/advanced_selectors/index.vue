<template>
  <div class="body">
    <div class="component">
      <h1>Snap together buttons</h1>
      <div class="snap-together-buttons">
        <button>Button</button>
      </div>
      <div class="snap-together-buttons">
        <button>Button</button>
        <button>Button</button>
      </div>
      <div class="snap-together-buttons">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div class="snap-together-buttons">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
    </div>
    <div class="component">
      <h1>Selectable progress bar</h1>
      <div class="selectable-progress-bar">
        <input type="radio" name="select1" />
        <input type="radio" name="select1" />
        <input type="radio" name="select1" />
        <input type="radio" name="select1" />
        <input type="radio" name="select1" />
      </div>
    </div>
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

$not-active: rgb(192, 192, 192);
$active: rgb(96, 128, 255);


.body {
  margin: 10px 30px;
  @media (max-width: $responsive-sm) {
    margin: 10px 10px;
  }
}


div.component {
  width: 100%;
  text-align: center;
  h1 {
    padding-top: 30px;
    padding-bottom: 10px;
    font-family: sans-serif;
    font-weight: 100;
    font-style: oblique;
  }

}

.selectable-progress-bar {
  input[type=radio] {
    width: 100px;
    height: 10px;
    visibility: hidden;
    margin: -5px;
    position: relative;

    &:first-child {
      width: 16px;
    }
    &:not(:first-child)::before {
      // The bar
      width: 80px;
      height: 4px;
      content: "";
      visibility: visible;
      display: inline-block;
      background-color: $active;
      margin-bottom: 5px;
      z-index: 0;
      transition-duration: 0.3s;
      transition-property: all;
    }

    &::after {
      // The circle
      width: 15px;
      height: 15px;
      content: "";
      visibility: visible;
      display: inline-block;
      background-color: $active;
      border-radius: 100%;
      position: absolute;
      z-index: 1;
      bottom: -2px;
      right: 5px;
      transition-duration: 0.3s;
      transition-property: all;
    }

    &:hover::after,
    &:checked:hover::after,
    {
      width: 25px;
      height: 25px;
      background-color: white !important; // FIXME
      bottom: -7px;
      right: 0px;
      border: 1px solid black;
    }

    &:checked::before {
      background-color: $active;
    }

    &:checked::after {
      background-color: $active;
      width: 20px;
      height: 20px;
      bottom: -4px;
      right: 0;
    }

    &:checked ~ input::before,
    &:checked ~ input::after
    {
      background-color: $not-active;
    }
  }
}

div.snap-together-buttons {
  margin: 10px;
  button {
    border-radius: 0;
    padding: 10px;
    margin-left: -2px;
    margin-right: -2px;
    border: 1px solid #555;
    background-color: #ccc;
    border-left: 1.5px solid #eee;
    border-top: 1.5px solid #eee;
    border-bottom: 1.5px solid #555;
    border-right: 1.5px solid #555;

    &:active {
      border-left-color: #555;
      border-top-color: #555;
      border-bottom-color: #eee;
      border-right-color: #eee;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    &:hover {
      box-shadow: 0px 3px 10px #888888;
    }
  }
}

</style>
