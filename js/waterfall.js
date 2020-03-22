(function() {
  var demoContent = [
    {
      demo_link: 'https://github.com/kayneriam/git-switch',
      img_link: 'https://i.loli.net/2020/03/22/T8YbCeDMvlOyQud.png',
      code_link: 'https://github.com/kayneriam/git-switch',
      title: 'git-switch',
      core_tech: 'Ruby, git',
      description: 'Tool for management git accounts'
    }
  ];

  contentInit(demoContent)
  waitImgsLoad()
}());

function contentInit(content) {

  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>Core tech: ' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '"><p>Source <i class="fa fa-code" aria-hidden="true"></i></p></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      count++
    } else {
      imgs[i].onload = function() {
        count++
        if (count == totalImgs) {
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    initGrid()
  }
}

function initGrid() {
  var msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
