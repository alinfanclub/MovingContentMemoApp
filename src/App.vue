<template>
  <div id="container">
    <header-view></header-view>
    <borad-view></borad-view>
    <input-text></input-text>
  </div>
</template>

<script>
import HeaderView from '@/components/Header.vue'
import BoradView from '@/components/Borad.vue'
import InputText from '@/components/InputText.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    BoradView,
    InputText
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  // border: 1px solid #9c9c9c;
  box-sizing: border-box;
  width: 80vw;
  height: 100vh;
  position: relative;

    #circleButton {
        position: absolute;
        bottom: 10px;
        right: 10px;

        #plusButton {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgb(181, 235, 101);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size : 30px;
        } 
        #inpuetModal {
          height: 300px;
          position: absolute;
          bottom: 60px;
          right: 0;

          textarea {
            height: 100%;
            resize: none;
            padding: 10px;
            box-sizing: border-box;
            &:focus {
              outline: none;
            }
          }
        }
    }

    
}
</style>
