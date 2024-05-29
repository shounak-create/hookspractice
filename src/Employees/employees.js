import { createSlice } from '@reduxjs/toolkit';
let id = 0

const Employees  = createSlice({
    name:"Employees",
    initialState:{
        Employees:[],
    },
    reducers:{
        Add_Task:(state,action)=>{
            state.Employees.push({
                name: action.payload.name,
                employee_id: ++id,
            })
        }
    }
})

export const {Add_Task} = Employees.actions;
export default Employees.reducer;
