const doLoginLayerVis = (visibility=false , action)=>{
    switch(action.type){
        case 'SHOW_LOGIN_LAYER':
            return true;
        case 'HIDE_LOGIN_LAYER':
            return false;
        default :
            return visibility;
    }
}

export default doLoginLayerVis;