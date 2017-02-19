import React , {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import actions from '../../action/action.js'
import {LoginForm} from '../content_component/RightContentCom.js'

class LoginLayerCom extends Component{
    render(){
        console.log(this.props);
        return (
            <section id="login-layer" ref='loginLayer' style={{display : this.props.loginLayerVisibility ? 'block' : 'none'}}>
                <div id="login-layer-wrap">
                    <div className="login-layer-close" onClick={()=>{this.props.dispatch(actions.hideLoginLayer())}}></div>

                    <div id="login-layer-inner">
                        <div className="login-header-wrap">
                            <span className="login-title">账号登录</span>
                        </div>
                        <LoginForm from="loginLayer" onLogin={this.props.onLogin}/>
                        <div className="login-register-wrap">
                            <a href="">
                                <span id="register-text">还没有微博？<span>立即注册</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const select = (state)=>{
    return{
        loginLayerVisibility : state.loginLayerVisibility
    }
}

export default connect(select)(LoginLayerCom);