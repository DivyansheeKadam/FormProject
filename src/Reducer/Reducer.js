const initialState={
    empData: [
        {
            id: 9,
            name: "Smita",
            email: "smita@gmail.com",
            mobno: "99999999",
            address: "Indore"
        },
        {
            id: 10,
            name: "Ridhima",
            email: "ridhima@gmail.com",
            mobno: "99999999",
            address: "Indore"
        }
    ]
}
const Reducer =(state = initialState, action)=>{
    const stateData= state.empData
    switch(action.type){
        case 'add_Data':
           return {empData:[...state.empData, action.payload]};
        
        case 'edit_Data':
           console.info("action.payload", action.payload, "editData", stateData)
           const newState = stateData.map((data)=>{
            if(data.id===action.payload.id){
                return action.payload
            } else {
                 return data
            }
           })
           return {...state, empData: newState}
           

        case 'remove_Data':
            return {
                ...state, 
                empData: stateData.filter((post)=>post.id != action.payload)};

        default : return state
    }
}
export default Reducer;


