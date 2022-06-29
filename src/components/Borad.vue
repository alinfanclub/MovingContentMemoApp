<template>
  <div>
     <!-- <div v-for="MemosItem in this.$store.state.Memos" :key="MemosItem" id="itemEach">
      {{MemosItem.item}}
    </div> -->
    <draggable 
          v-model="this.$store.state.Memos" 
          group="people" 
          @start="drag=true" 
          @end="drag=false" 
          item-key="id"
          v-bind="dragOptions"
          id="BoradContainer">
    <template #item="{element}">
        <div id="itemEach">{{element.item}}</div>
    </template>
    </draggable>
  </div>
</template>

<script>
import { Transition } from '@vue/runtime-dom'
// import { mapGetters } from 'vuex';
// import { mapMutations } from 'vuex';
import draggable from 'vuedraggable'
export default {
    name : 'BoradView',
    data() {
      return {
        drag: false,
      }
    },
    display : Transition,
    components : {
      draggable,
    },
    computed : {
      dragOptions() {
        return {
          animation: 800,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    }
}
</script>

<style scoped>
#BoradContainer {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  padding: 20px 0 0 0;
}
  #itemEach {
    border: 1px solid #9c9c9c;
    width: fit-content;
    padding: 20px;
    height: fit-content;
    margin: 1px;
    border-radius: 5px;
  }
  .flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>