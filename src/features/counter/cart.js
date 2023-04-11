import { createSlice } from '@reduxjs/toolkit';





export const cartAdder = createSlice({
  name: 'carter',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value=[...action.payload];
    },
    sub: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value=[...action.payload];
    },
    remove: (state,action) => {
      // state.value.forEach(element => {
      //   console.log(action.payload,' & ', element);
      //     if(action.payload!==element.id){

      //       state.value=[...state.value]

      //     }
      //     else{
            
      //     }

        
      // });

      state.value=[...action.payload];
      
    },
    addtoCART:(state,action)=>{
    //  state=primary;
    
    state.value=[...state.value,action.payload];
     
     
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { add, remove,addtoCART,sub} = cartAdder.actions

export default cartAdder.reducer;