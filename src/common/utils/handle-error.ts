import { isAxiosError } from "axios"
import { Dispatch } from "redux"
import { setAppErrorAC } from "../../app/app-reducer"

export const handleError = (e: unknown, dispatch: Dispatch)=>{
     let errorMessage: string
      if (isAxiosError<ServerError>(e)) {
        errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
       
      }
     
      else {
        errorMessage = (e as Error).message
      }
  
      dispatch(setAppErrorAC(errorMessage))
    }
    type ServerError = {
        errorMessages: Array<{ field: string; message: string }>
      }



// export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
//     try {
//       //throw new Error('Error')
//       const res = await decksAPI.updateDeck(params)
//       dispatch(updateDeckAC(res.data))
//     } catch (e: any) {
//       console.log(e)
  
