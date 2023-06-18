<button class="button">
   <slot/>
</button>
<style>
    .button {
  --font-color: #323232;
  --bg-color: #fff;
  --main-color: #323232;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #FDDCAF;
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
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
  border: 1px solid #000;
  border-radius: 20px;
    transition: all .25s;
}
.button:hover::before {
    left: 0px;
    top:0px;
    transition: all .25s;
}
</style>