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
    <div class="component">
      <h1>Form</h1>
      <div class="floating-form">
        <h2>Important message</h2>
        <p>The foos are required by the bars.</p>
        <p>What would you like to do?</p>
        <div class="form-auto-buttons">
          <input type="button" value="Delete the Foos" />
          <input type="button" value="Delete the Bars" />
          <input type="button" value="Proceed" />
          <input type="button" value="Do nothing" />
        </div>
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

$default-color: #777;
$danger-color: rgb(210, 0, 0);
$success-color: rgb(0, 210, 0);

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

.floating-form {
  /* note that I have to use Inputs because
   * in an input the text is an attribute
   * and thus I can match on it with standard CSS selectors
   */
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 5px 0px -2px #888;

  h2 {
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 2.3em;
    font-family: sans-serif;
    font-weight: 800;
    margin-top: 10px;
  }

  input[type=button] {
    padding: 10px;
    border-radius: 8px;
    background-color: white;
    border: 2px solid $default-color;
    color: $default-color;
    font-size: 15px;
    font-weight: bold;
    transition-property: all;
    transition-duration: 0.3s;
    &:hover {
      box-shadow: 0 0 4px 2px #999;
    }
    &:active {
      box-shadow: none;
      background-color: $default-color;
      color: white;
      transition-duration: 0s;
    }
  }
  .form-auto-buttons {
    padding: 10px;
    input[type=button]{
      &[value*=Delete],
      &[value*=delete] {
        border-color: $danger-color;
        color: $danger-color;
        &:hover {
          box-shadow: 0 0 4px 2px red;
        }
        &:active {
          box-shadow: none;
          background-color: $danger-color;
          color: white;
          transition-duration: 0s;
        }
      }
      &[value*=Ok], &[value*=ok], &[value*=Proceed], &[value*=proceed] {
        border-color: $success-color;
        color: $success-color;
        &:hover {
          box-shadow: 0 0 4px 2px green;
        }
        &:active {
          box-shadow: none;
          background-color: $success-color;
          color: white;
          transition-duration: 0s;
        }
      }
    }
  }
}

</style>
