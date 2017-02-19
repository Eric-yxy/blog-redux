import React , {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import actions from '../../action/action.js'


class RegisterLayerCom extends Component{
    render(){
        return(
            <section id="login-layer" ref='loginLayer' style={{display : this.props.registerLayerVisibility ? 'block' : 'none'}}>
                <div id="login-layer-wrap">
                    <div className="login-layer-close" onClick={()=>this.props.dispatch(actions.toggleRegisterLayer())}></div>

                    <div id="login-layer-inner">
                        <div className="login-header-wrap">
                            <span className="login-title">注册账号</span>
                        </div>
                        <RegisterFormCom from="loginLayer" onRegister={this.props.onRegister}/>
                    </div>
                </div>
            </section>
        )
    }
}

class RegisterFormCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            pwd : ''
        }
    }
    render(){
        return(
            <form>
                <div className="login-form-wrap">
                    <div className="login-input-wrap">
                        <span className="user-icon login-icon"></span>
                        <input type="text"  placeholder="请输入用户名"  onChange={this.handleUsername}></input>
                        <input type="text" style={{display : 'none'}} />
                    </div>
                    <div className="login-input-wrap">
                        <span className="pwd-icon login-icon"></span>
                        <input type="password"  placeholder="请输入密码" onChange={this.handlePwd} onKeyDown={this.keyHandle}></input>
                    </div>
                </div>

                <div className="login-button-wrap" style={{marginTop : 30}}>
                    <div className="login-button" onClick={this.clickHandle}>注册</div>
                </div>
            </form>
        )
    }
}

const select = (state)=>{
    return{
        registerLayerVisibility : state.registerLayerVisibility
    }
}

export default connect(select)(RegisterLayerCom);