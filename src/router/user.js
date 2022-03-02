const handleUserRouter = (req, res) => {
  const method = req.method;

  // 登录
  if (method === "POST" && req.path === "/api/blog/login") {
    return {
      msg: "获取登录的接口",
    };
  }
};

module.exports = handleUserRouter