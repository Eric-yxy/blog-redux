const doRegisterLayerVis = (visibility=false , action)=>{
    switch(action.type){
        case 'TOGGLE_REGISTER':
            return !visibility;
        default :
            return visibility;
    }
}

export default doRegisterLayerVis;