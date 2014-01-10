#----- PAGE -------
page = PAGE
page {
  typeNum = 0
  meta.AUTHOR = AUTHOR
  meta.DESCRIPTION = BITTE DESCRIPTION EINGEBEN!
  shortcutIcon = fileadmin/images/apple-touch-icon-precomposed.png
  includeCSS {
    file81 = fileadmin/css/jquery.mobile.inline-svg-1.4.0.min.css
    file82 = fileadmin/css/jquery.mobile.structure-1.4.0.min.css
    file83 = fileadmin/css/jquery.mobile.theme-1.4.0.min.css
  }
  headerData.29 = TEXT
  headerData.29.value = <meta name="format-detection" content="telephone=no">
  headerData.30 = TEXT
  headerData.30.value = <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  headerData.31 = TEXT
  headerData.31.value = <link rel="apple-touch-icon-precomposed" href="fileadmin/images/apple-touch-icon-precomposed.png" />
  10 = TEMPLATE
  10 {
    template = FILE
    template.file = fileadmin/templates/mobile.tmpl
    workOnSubpart = DOCUMENT_BODY
    marks{
      CONTENT < styles.content.get

      SITE_TITLE = TEXT
      SITE_TITLE.data = leveltitle:-1
      SITE_TITLE.insertData = 1

      MAINNAVI = HMENU
      MAINNAVI {
        entryLevel = 0
        1 = TMENU
        1 {
          ACT = 1
          ACT.allWrap = <li data-theme="b"> | </li>
          NO.allWrap = <li> | </li>
        }
      }
    }# marks
  }# template
}# page