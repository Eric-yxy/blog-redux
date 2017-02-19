import React , {Component} from 'react'
import {render} from 'react-dom'

class MiddleContentCom extends Component{
    render(){
        return(
            <section id="content-list-wrap">
                <div id="edit-blog-wrap">
                    <h2 className="edit-blog-title">想要告诉大家什么有趣的事？<span  className="textareaNumber">已输入<span>0</span>字</span></h2>
                    <div className="edit-input-wrap">
                        <textarea rows="10" id="edit-input" ></textarea>
                    </div>
                    <div className="edit-option-wrap">

                        <div className="send-blog-button" >发布</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MiddleContentCom;