const doBlogList = (blogList=[] , action)=>{
    switch (action.type){
        case 'INIT_BLOG':
            return action.blogList;
        default:
            return blogList;
    }
}

export default doBlogList;