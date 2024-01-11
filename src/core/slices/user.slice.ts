import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from "@/core/types/index"

interface IFetchingResponse{
    data:IUser[],
    status:string,
    error:string
}

const initialState:IFetchingResponse = {
  data: [],
  status:"",
  error:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {} = userSlice.actions

export default userSlice.reducer