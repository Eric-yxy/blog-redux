import doLogin from './doLogin.js'
import doBlogList from './doBlogList.js'
import doUserData from './doUserData.js'
import doLoginLayerVis from './doLoginLayerVis.js'
import doRegisterLayerVis from './doRegisterLayerVis.js'


export default (state={} , action)=>{
    return {
        isLogin : doLogin(state.isLogin , action),
        blogList : doBlogList(state.blogList , action),
        userData : doUserData(state.userData , action),
        loginLayerVisibility : doLoginLayerVis(state.loginLayerVisibility , action),
        registerLayerVisibility : doRegisterLayerVis(state.registerLayerVisibility , action)
    }
}