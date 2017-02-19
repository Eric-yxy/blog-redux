import React , {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import actions from '../action/action.js'
import HeaderCom from './header_component/index.js'
import MiddleContentCom from './content_component/MiddleContentCom.js'
import LeftContentCom from './content_component/LeftContentCom.js'
import RightContentCom from './content_component/RightContentCom.js'
import RegisterLayerCom from './layer_component/RegisterLayerCom.js'
import LoginLayerCom from './layer_component/LoginLayerCom.js'


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {dispatch , isLogin , userData , blogData} = this.props;
        return(
            <div id="top-background" className='top-login-background'>
                <HeaderCom isLogin={isLogin} onLogin='sss' onLoginOut={''} onShowLoginLayer={()=>{dispatch(actions.showLoginLayer())}} onToggleRegisterLayer={()=>{dispatch(actions.toggleRegisterLayer())}}/>
                <LoginLayerCom/>
                <RegisterLayerCom></RegisterLayerCom>
                <section className="content-wrap">

                    <LeftContentCom/>
                    <MiddleContentCom />
                    <RightContentCom/>
                </section>
            </div>
        )
    }
    loginIn() {
        this.props.dispatch(actions.loginIn());
        this.props.dispatch(actions.initBLogList());
    }
    loginOut() {
        this.props.dispatch(actions.loginOut());
    }
    doRegister(){

    }
    showRegisterLayer (){

    }
    showLoginLayer(){

    }
    onHideRegisterLayer(){

    }
    onHideLoginLayer(){

    }

}

const select = (state)=>{
    return{
        isLogin : state.isLogin,
        userData : state.userData,
        blogList : state.blogList
    }
}

export default connect(select)(App);
