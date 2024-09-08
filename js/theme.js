document.addEventListener("DOMContentLoaded", function () {
  // 获取主题切换按钮
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // 页面加载时应用主题设置
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    root.classList.add("skin-dark");
    themeToggle.querySelector("i").classList.add("ri-sun-line");
    themeToggle.querySelector("i").classList.remove("ri-moon-line");
  } else {
    root.classList.remove("skin-dark");
    themeToggle.querySelector("i").classList.add("ri-moon-line");
    themeToggle.querySelector("i").classList.remove("ri-sun-line");
  }

  // 主题切换按钮点击事件
  themeToggle.addEventListener("click", function () {
    if (root.classList.contains("skin-dark")) {
      root.classList.remove("skin-dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("skin-dark");
      localStorage.setItem("theme", "dark");
    }

    // 获取按钮内的图标元素
    const icon = this.querySelector("i");
    if (icon.classList.contains("ri-moon-line")) {
      icon.classList.remove("ri-moon-line");
      icon.classList.add("ri-sun-line");
    } else {
      icon.classList.remove("ri-sun-line");
      icon.classList.add("ri-moon-line");
    }
  });
});
