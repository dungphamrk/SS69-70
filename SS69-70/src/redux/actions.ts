export const addCart=(id:number)=>({
    type: 'AddToCart' ,
    payload: id
})
export const deleteCart=(id:number)=>({
    type: 'DeleteItem' ,
    payload: id
})