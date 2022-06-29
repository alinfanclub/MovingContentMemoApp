import { createStore } from 'vuex'

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for ( var i = 0; i < localStorage.length; i ++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      } 
    }

    return arr.sort(function(a, b)  {
      return a.id - b.id;
    });
  }
};


const store = createStore({
  state(){
    return {
      Memos: storage.fetch(),
      BackColor : ['blue', 'red', "yellow"],
      color : ''
    }
  },
  mutations : {
    addMemo(state, {memo , id}) {
      // console.log(this.newMemo);
      var obj = {completed: false, item: memo, id : id};
      localStorage.setItem(memo, JSON.stringify(obj));
      state.Memos.push(obj);
    },
    
  }
})

export default store