const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1646204461414, 
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1646204498787, 
            author: '里斯'
        },
    ]
}

module.exports = {
    getList
}