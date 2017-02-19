const actions = {
    loginIn : ()=>{
        return{
            type : 'LOGIN_IN'
        }
    },
    loginOut : ()=>{
        return{
            type : 'LOGIN_OUT'
        }
    },
    initBLogList : (blogList)=>{
        return {
            type : 'INIT_BLOG',
            blogList : blogList
        }
    },
    initUserData : (userData)=>{
        return{
            type : 'INIT_USERDATA',
            userData : userData
        }
    },
    showLoginLayer : ()=>{
        return{
            type : 'SHOW_LOGIN_LAYER',
        }
    },
    hideLoginLayer : ()=>{
        return{
            type : 'HIDE_LOGIN_LAYER'
        }
    },
    toggleRegisterLayer : ()=>{
        return{
            type : 'TOGGLE_REGISTER'
        }
    }
}

export default actions;