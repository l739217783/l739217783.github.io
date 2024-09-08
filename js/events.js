// 页面通用事件监听

document.addEventListener("DOMContentLoaded", function () {
  // 导航栏阴影，监听滚动，到达指定阈值显示阴影
  const header = document.querySelector(".imqi1-header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      // 或者设置一个特定的阈值，如 scrollTop > 100
      header.classList.add("imqi1-header-sticked");
    } else {
      header.classList.remove("imqi1-header-sticked");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 置顶按钮

  // 获取返回顶部按钮
  const scrollTopButton = document.getElementById("scroll-top");

  // 监听滚动事件
  window.addEventListener("scroll", function () {
    const scrollHeight =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // 当页面滚动超过一定高度时显示按钮
    if (scrollHeight > windowHeight) {
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }
  });

  // 点击按钮返回页面顶部
  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
