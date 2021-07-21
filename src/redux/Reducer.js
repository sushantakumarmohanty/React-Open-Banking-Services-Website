import * as types from './ActionType';

const initialState = {
    "emps": [],
    "emp": {},
    loading:true,
};

const empReducers = (state=initialState,action) => {
    
    switch(action.type)
    {
        case types.GET_EMPS:
          return{
              ...state,
              emps:action.payload,
              loading: false,
          }

        case types.DELETE_EMPS:
            return{
                ...state,
                loading:false,
            }  
        
        case types.ADD_EMPS:
                return{
                    ...state,
                    loading:false,
                } 

        case types.GET_SINGLE_EMPS:
            return{
                ...state,
                emp: action.payload,
                loading:false,
            }    
            
         case types.UPDATE_EMPS:
             return{
                 ...state,
                 loading:false,
             }   

        default:
            return state;
    }
}

export default empReducers;