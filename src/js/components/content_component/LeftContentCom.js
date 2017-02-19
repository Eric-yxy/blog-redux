import React , {Component} from 'react'
import {render} from 'react-dom'

class LeftContentCom extends Component{
    render(){
        return(
            <nav className="left-nav">
                <ul id="left-nav-ul">
                    <li className='left-nav-li'  onClick={()=>{}}>
                        <div className="logo-left"></div>
                        <span className="left-text">首页</span>
                    </li>
                    <li className='left-nav-li' onClick={()=>{}}>
                        <div className="logo-left"></div>
                        <span className="left-text">我的收藏</span>
                    </li>
                    <li className='left-nav-li'  onClick={()=>{}}>
                        <div className="logo-left"></div>
                        <span className="left-text">我的赞</span>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default LeftContentCom;