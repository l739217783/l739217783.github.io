// 直接从模块中导入 Waline 类
import { init } from "https://unpkg.com/@waline/client@v3/dist/waline.js";

const waline = init({
  el: "#waline",
  serverURL: "https://comments.linguoguang.com", // 替换为你的 Waline 服务器地址
  placeholder: "说点什么吧...",
  avatar: "mm",
  emoji: ["https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo"],
  meta: ["nick", "mail", "link"],
  lang: "zh-CN",
  requiredFields: ["nick", "mail"],
  dark: "html[class='skin-dark']",
  highlight: true,
});
