const doLogin = (isLogin='false' , action)=>{
    switch(action.type){
        case 'LOGIN_IN':
            return 'true';
        case 'LOGIN_OUT':
            return 'false';
        default:
            return isLogin;
    }
}

export default doLogin;