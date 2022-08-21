const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  base: "/",
  theme: hopeTheme({
    // 此处放置主题配置
  }),
  configureWebpack: {
    resolve: {
      alias: {
        "@": "docs/.vuepress",
      },
    },
  },
  themeConfig: {
    logo: "/logo.png",
    sidebar: {
      "/guide/": [
        {
          title: "公共组件",
          collapsable: false,
          children: ["", "components/Dialog", "components/Table"],
        },
        {
          title: "指令",
          collapsable: false,
          children: ["directive/dragMove"],
        },
      ],
    },
  },
};
