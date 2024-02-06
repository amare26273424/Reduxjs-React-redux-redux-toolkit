import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    cardlist:[],
    totalquentity:0,
    showcart:false
}

const cardslice = createSlice({

              name:'card',
              initialState,
              reducers:{
                addtocart(state,action){                      
                   const newitem = action.payload;
                    const existingitem = state.cardlist.find((item)=> item.id === newitem.id)  
                    if(existingitem){
                        existingitem.quantity++;
                        existingitem.totalprice+=newitem.price
                    }     
                    else{
                        state.cardlist.push({

                                 id:newitem.id,
                                 price:newitem.price,
                                 quantity:1,
                                 totalprice:newitem.price,
                                 name:newitem.name

                        })
                        state.totalquentity++ 
                    }
                       
                },


                removefromcart(state, action) {
                    const id = action.payload;
                    const existingItem = state.cardlist.find((item) => item.id === id);
                    if (existingItem.quantity === 1) {
                      state.cardlist = state.cardlist.filter((item) => item.id !== id);
                      state.totalquentity--
                    }

                    else{
                        existingItem.quantity--;
                        existingItem.totalprice-=existingItem.price;
                    }
                   
                  }
                  ,

                setshowcart(state){
                    state.showcart =  !state.showcart;
                }
              }


})


export const {addtocart,removefromcart,setshowcart}  =  cardslice.actions;


export default cardslice