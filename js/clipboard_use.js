let clipboard;

// 等待 DOM 完全加载
window.addEventListener("DOMContentLoaded", () => {
  // 找到所有代码块，并为它们创建复制按钮
  const codeBlocks = document.querySelectorAll("pre");

  // 为每个代码块创建一个复制按钮并添加到代码块旁边
  codeBlocks.forEach((codeBlock) => {
    const copyButton = document.createElement("div");
    copyButton.className = "codeblock-copy-wrapper";
    copyButton.setAttribute("data-clipboard-text", codeBlock.innerText); // 设置复制的文本
    codeBlock.appendChild(copyButton);
  });

  // 创建 ClipboardJS 实例
  clipboard = new ClipboardJS(".codeblock-copy-wrapper", {
    text: function (trigger) {
      return trigger.getAttribute("data-clipboard-text");
    },
  });

  // 监听成功事件
  clipboard.on("success", function (e) {
    // 添加复制成功的样式
    e.trigger.classList.add("codeblock-copy-wrapper-copied");

    // 设置延时移除复制成功的样式
    setTimeout(() => {
      e.trigger.classList.remove("codeblock-copy-wrapper-copied");
    }, 1500);
  });

  // 监听错误事件
  clipboard.on("error", function (e) {
    console.error("复制失败:", e);
  });

  // 添加事件委托监听器
  const content = document.querySelector("div.imqi1-post-content imqi1-fadeUp");
  if (content) {
    content.addEventListener("click", function (e) {
      const copyButton = e.target.closest(".codeblock-copy-wrapper");
      if (copyButton) {
        // 使用全局实例触发复制操作
        clipboard.triggerAction(copyButton);
      }
    });
  }
});
