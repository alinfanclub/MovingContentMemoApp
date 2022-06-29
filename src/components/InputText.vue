<template>
  <div>
    <div id="circleButton">
        <div id="plusButton" @click="InputToggle">
            +
        </div>
        <div id="inpuetModal" v-if="modalOpen" @close="modalOpen">
            <textarea placeholder="내용을 입력해주세요" v-model="newMemo" @keydown.enter.exact.prevent="ModalKeyPress"  @keydown.enter.shift.exact.prevent="newMemo += '\n'" ></textarea>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'InputText',
    data() {
        return {
            modalOpen : false,
            newMemo : "",
            id : localStorage.length
        }
    },
    methods : {
        InputToggle() {
           if(this.modalOpen == true){
            this.modalOpen = false 
           } else {
            this.modalOpen = true
           }
        },
        ModalKeyPress() {
            // console.log(this.newMemo);
            this.modalOpen = !this.modalOpen;
            if(this.newMemo !== ''){
                this.$store.commit('addMemo', {
                    memo : this.newMemo,
                    id : this.id
                })
                this.clearInput();
            }
        },
        clearInput() {
            this.newMemo = '';
        }
    }
}
</script>

<style scoped lang="scss">
 
</style>