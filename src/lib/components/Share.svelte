<button class="button">
  <slot />
</button>

<style>
  .button {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: #fddcaf;
    font-size: 17px;
    font-weight: 600;
    color: #121212;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  .button:before {
    background-color: transparent;
    content: '';
    top: 2px;
    position: absolute;
    left: 2px;
    width: 100%;
    height: 100%;
    border: 1px solid #121212;
    border-radius: 30px;
    transition: all 0.25s;
  }
</style>
