<template>
  <div class="body">
    <ul>
      <li><button>This is a button</button></li>
      <li><button>This is a button</button></li>
    </ul>
    <div class="selectable-progress-bar">
      <input type="radio" name="select1" />
      <input type="radio" name="select1" />
      <input type="radio" name="select1" />
      <input type="radio" name="select1" />
      <input type="radio" name="select1" />
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

$not-active: grey;
$active: blue;


.body {
}

button {
  padding: 10px;
  width: 100%;
}

.selectable-progress-bar {
  input[type=radio] {
    width: 100px;
    height: 10px;
    visibility: hidden;
    margin: 0;

    &:first-child {
      width: 16px;
    }
    &:not(:first-child)::before {
      width: 80px;
      height: 10px;
      content: "";
      visibility: visible;
      display: inline-block;
      background-color: $active;
      margin-bottom: 5px;
    }

    &::after {
      width: 20px;
      height: 20px;
      content: "";
      visibility: visible;
      display: inline-block;
      background-color: $active;
      border-radius: 100%;
    }

    &:checked::before {
      background-color: $active;
    }

    &:checked::after {
      background-color: $active;
    }

    &:checked ~ input::before,
    &:checked ~ input::after {
      background-color: $not-active;
    }
  }
}

</style>
