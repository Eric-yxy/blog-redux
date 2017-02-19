import React , {Component} from 'react'
import {render} from 'react-dom'

class RightContentCom extends Component{
    render(){
        return(
        <section id="content-right-wrap">
            <LoginCom isLogin={this.props.isLogin} onLogin={this.props.onLogin} userData={this.props.userData}></LoginCom>
            <HotBlogCom/>
        </section>
        )
    }
}

class LoginCom extends Component{
    render(){
        return(
            <div id="login-wrap" className="content-right-inner">
                <div className="login-header-wrap">
                    <span className="login-title">账号登录</span>
                </div>
                <LoginForm from="index" onLogin={this.props.onLogin}/>
                <div className="login-register-wrap">
                    <a href="">
                        <span id="register-text">还没有微博？<span>立即注册</span></span>
                    </a>
                </div>
            </div>
        )
    }
}


class LoginForm extends Component{
    render(){
        return(
            <form>
                <div className="login-form-wrap">
                    <div className="login-input-wrap">
                        <span className="user-icon login-icon"></span>
                        <input type="text" id={"username-"+this.props.from} placeholder="请输入用户名"  onChange={this.handleUsername}></input>
                    </div>
                    <div className="login-input-wrap">
                        <span className="pwd-icon login-icon"></span>
                        <input type="password" id={"pwd-"+this.props.from} placeholder="请输入密码" onChange={this.handlePwd} onKeyDown={this.keyHandle}></input>
                    </div>
                </div>
                <div className="login-option-wrap">
                    <a href="">
                        <span id={'forget-pwd-' + this.props.from}>忘记密码</span>
                    </a>
                </div>
                <div className="login-button-wrap">
                    <div className="login-button" onClick={this.clickHandle}>登录</div>
                </div>
            </form>
        )
    }
}

class HotBlogCom extends Component{
    render(){
        return(
            <div id="hot-blog-wrap" className="content-right-inner">
                <div className="hot-blog-header">
                    <span className="hot-blog-title">热门文章</span>
                    <div className="hot-blog-change-button"><span className="hot-blog-icon"></span>换一换</div>
                </div>
                <div className="hot-blog-list">
                    <ul className="hot-blog-ul">
                        <li className="hot-blog-li"><span className="article-title">养生必知</span><span className="article-number">200人喜欢</span></li>
                        <li className="hot-blog-li"><span className="article-title">新闻必知</span><span className="article-number">200人喜欢</span></li>
                        <li className="hot-blog-li"><span className="article-title">养生必知</span><span className="article-number">200人喜欢</span></li>
                        <li className="hot-blog-li"><span className="article-title">养生必知</span><span className="article-number">200人喜欢</span></li>
                        <li className="hot-blog-li"><span className="article-title">养生必知</span><span className="article-number">200人喜欢</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RightContentCom;
export {LoginForm}