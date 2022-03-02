const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1646204461414,
      author: "张三",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1646204498787,
      author: "里斯",
    },
  ];
};

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1646204461414,
    author: "张三",
  };
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  
  return {
    id: 3, // 表示新建博客，插入到数据表里面的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 就是更新博客的 id
  // blogData 是一个博客对象，包含 title content 属性
  
  return true
};



module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog
};
