SSR.compileTemplate('content', Assets.getText('loader/content.html'))
altboiler.config({
  action: Assets.getText('loader/loader.html'),
  content: SSR.render('content'),
  css: Assets.getText('loader/styles.css')
})
