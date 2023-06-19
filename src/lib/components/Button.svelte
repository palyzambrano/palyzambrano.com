<button class="button" on:click>
  <slot />
</button>

<style>
  .button {
    padding: 0 30px;
    height: 40px;
    border-radius: 20px;
    background-color: #d1cdff;
    font-size: 17px;
    font-weight: 400;
    color: #121212;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  .button:before {
    background-color: transparent;
    content: '';
    top: 3px;
    position: absolute;
    left: 3px;
    width: 100%;
    height: 100%;
    border: 1px solid #121212;
    border-radius: 20px;
    transition: all 0.25s;
  }
  .button:hover::before {
    left: 0px;
    top: 0px;
    transition: all 0.25s;
  }
</style>
