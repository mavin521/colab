const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // 👉 修改为你自己的 Colab Notebook 链接
  await page.goto('https://colab.research.google.com/github/mavin521/colab/blob/main/colab_streamer.ipynb', {
    waitUntil: 'networkidle2',
  });

  console.log('✅ 打开 Colab 页面成功');

  // 模拟运行全部
  await page.keyboard.down('Control');
  await page.keyboard.press('F9');
  await page.keyboard.up('Control');

  console.log('✅ 已发送运行全部快捷键 Ctrl+F9');

  // 保持运行一段时间（比如 5 分钟）
  await page.waitForTimeout(300000);

  await browser.close();
})();
