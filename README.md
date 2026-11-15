# 星构微官网

星构微（厦门）数字技术有限公司的静态官网。使用 HTML、CSS 和 JavaScript，可直接部署到 GitHub Pages。页面中的商务咨询通过 `info@thinkgotech.com` 邮件链接处理。

## 本地预览和编辑

解压后双击 `index.html`。点击页眉的 **English** 或 **中文**，可在当前页面切换语言。请保留 `en`、`assets` 文件夹及内部结构。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 中文版的导航和 64 个页面视图 |
| `en/index.html` | 英文版的导航和 64 个页面视图 |
| `assets/css/site.css` | 页面布局、配色和移动端样式 |
| `assets/js/site.js` | 菜单、页面切换和浏览器前进／后退 |
| `assets/images/` | 官网图片和标志，产品品牌图位于 `brands/` |
| `CNAME` | 站点域名 `www.thinkgotech.com` |
| `.nojekyll` | 让 GitHub Pages 直接发布静态文件 |

各页面通过网址中的 `#` 定位，例如 `index.html#overseas` 和 `en/index.html#overseas`。

更新现有 GitHub Pages 仓库时，将解压后的 `index.html`、`en/` 和 `assets/` 提交到当前发布分支的根目录即可。若仓库已有自己的 `CNAME`，沿用仓库里的文件。

## 发布到 GitHub Pages

1. 新建 GitHub 仓库。GitHub Free 的 Pages 可使用公开仓库。
2. 将 ZIP 解压后的**文件和文件夹**提交到仓库 `main` 分支的根目录。确认在仓库首页能直接看到 `index.html` 和 `assets/`。也请保留 `.nojekyll`。
3. 在仓库点击 **Settings → Pages**，将 **Source** 设为 **Deploy from a branch**。选择 **main** 和 **/(root)**，点击 **Save**。
4. 等待部署完成，再从 **Settings → Pages** 打开发布地址，确认菜单和图片正常。

### 绑定 www.thinkgotech.com

1. 在仓库的 **Settings → Pages → Custom domain** 输入 `www.thinkgotech.com` 并保存。
2. 到域名的 DNS 管理页面新增或更新 `www` 的 **CNAME** 记录，目标填 **仓库所有者.github.io**，例如 `example-company.github.io`。目标只填主机名，仓库名称和路径留空。仅调整网站所用的 `www` 记录。
3. 等待 GitHub Pages 的域名检查通过。待证书可用后，勾选 **Enforce HTTPS**，然后访问 `https://www.thinkgotech.com` 验证。

[GitHub Pages 发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [GitHub Pages 自定义域名说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
