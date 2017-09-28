import React , {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import actions from '../../action/action.js'

class HeaderCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {isLogin , username} = this.props;
        return(
            <header>
                <section id="header-wrap">
                    <div className="logo-wrap">
                        <a href="/main/index">
                            <span className="logo-sapn"></span>
                        </a>
                    </div>

                    <HeaderLoginCom isLogin={this.props.isLogin} onLoginOut={this.props.onLoginOut} onShowLoginLayer={this.showLoginLayer.bind(this)} onShowRegisterLayer={this.showRegisterLayer.bind(this)}/>

                    <div className="header-ul-wrap">
                        <ul className="header-ul">
                            <li className="header-li">
                                <a href="/">
                                    <div className="header-png">
                                        <div className="header-png-inner header-3"></div>
                                    </div>
                                    <span className="header-text"><p>发现</p></span>
                                </a>
                            </li>
                            <li className="header-li">
                                <a href="/">
                                    <div className="header-png">
                                        <div className="header-png-inner header-2"></div>
                                    </div>
                                    <span className="header-text"><p>视频</p></span>
                                </a>
                            </li>
                            <li className="header-li">
                                <a href="/main/index">
                                    <div className="header-png">
                                        <div className="header-png-inner header-1"></div>
                                    </div>
                                    <div className="header-text"><p>首页</p></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        )
    }
    showLoginLayer() {
        this.props.dispatch(actions.showLoginLayer());
    }
    showRegisterLayer() {
        this.props.dispatch(actions.toggleRegisterLayer());
    }
}

class HeaderLoginCom extends Component{
    render(){
        return(
            <div className="login-wrap">
                <div className="login-inner"><span onClick={this.props.onShowRegisterLayer}>注册</span></div>
                <div className="vertical-line"></div>
                <div className="login-inner" ><span onClick={this.props.onShowLoginLayer}>登录</span></div>
            </div>
        )
    }
}

class HeaderNavUserCom extends Component{
    render(){
        return(
            <li className="header-li">
                <a href="/main/userPage">
                    <div className="header-png">
                        <div className="header-png-inner header-4"></div>
                    </div>
                    <span className="header-text"><p>{this.context.username}</p></span>
                </a>
            </li>
        )
    }
}

let select = (state)=>{
    return{
        isLogin : state.isLogin,
        username : state.userData.username
    }
}

export default connect(select)(HeaderCom);