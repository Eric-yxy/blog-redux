import React , {Component} from 'react'
import {render} from 'react-dom'

class OneBlogCom extends Components{
    render(){
        return (
            <div className="one-blog-wrap">
                <div className="one-blog-left">
                    <div className="head-portrait-wrap">
                        <a href={'/main/userPage?currentUser=' + data.author}>

                            <img src="../img/test/header-portrait.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="one-blog-content-wrap">
                    <a href={'/main/userPage?currentUser=' + data.author}>
                        <h2 className="one-blog-title">{data.author}的微博</h2>
                    </a>
                    <span className="one-blog-time">{this.context.transferTime(data.date)}   <span className="one-blog-from">来自 微博</span></span>
                    <div className="one-blog-text">
                        <p>{data.contentText}</p>
                    </div>
                </div>
                <OneBlogImgCom imgArray={data.img}></OneBlogImgCom>


                <OneBlogFunctionCom blogData={data}></OneBlogFunctionCom>

            </div>
        )
    }
}

class OneBlogImgCom extends Component{
    render(){
        return (
            <div>
                <div className="function-wrap">
                    <ul className="function-ul">
                        <li className="function-li" onClick={this.addLike}><span className="function-button-wrap"><span
                            className={"button-icon likes-icon" + this.state.isLikes}></span><span className="likes-number">{this.state.likesNumber}</span></span></li>
                        <li className="function-li" onClick={this.reprint}><span className="function-line"><span className="function-button-wrap"><span
                            className={"button-icon reprint-icon" }></span><span className="reprint-number">123</span></span></span></li>
                        <li className="function-li" onClick={this.showComment}><span className="function-line"><span className="function-button-wrap"><span
                            className="button-icon comment-icon"></span><span className="comment-number">{this.state.commentNumber}</span></span></span>
                            <div style = {{display : this.state.showComment}}>
                                    <span className="comment-arrow-position">
                                        <span className="arrow-wrap">
                                            <i className='arrow-icon-border'></i>
                                            <em className='arrow-icon'></em>
                                        </span>
                                    </span>
                            </div>
                        </li>
                        <li className="function-li" onClick={this.addCollection}><span className="function-line"><span className="function-button-wrap"><span
                            className={"button-icon collection-icon" + this.state.isCollection}></span><span>收藏</span></span></span></li>
                    </ul>
                </div>


                <div className="comment-wrap" style = {{display : this.state.showComment}}>
                    <div className="comment-inner">
                        <div className="add-comment-wrap">
                            <div className="user-portrait-wrap">
                                <img src="../img/test/header-portrait.jpg" alt=""/>
                            </div>
                            <div className="comment-input-wrap">
                                <input type="text" id="add-comment-content" onChange={this.handleChange}/>
                            </div>
                            <div className="add-comment-btn-wrap">
                                <div className="add-comment-btn" onClick={this.submitComment}>评论</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class DbCommentListCom extends Component{
    render(){
        return(
            <div className="db-comment-list">
                <span className="db-comment-content">
                    <span className="db-comment-username">{data.author}</span>
                    <span className="db-comment-text">：{data.contentText}</span>
                    <div className="db-comment-time-wrap">
                        <p className="db-comment-time">{this.context.transferTime(data.date)}   </p>
                    </div>
                </span>
            </div>
        )
    }
}