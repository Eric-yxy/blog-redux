const doUserData = (userData={} , action)=>{
    switch(action.type){
        case 'INIT_USERDATA':
            return action.userData;
        default:
            return userData;
    }
}

export default doUserData;