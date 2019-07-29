var buttons = document.querySelectorAll('.tab-container .button-container button')
var panels = document.querySelectorAll('.tab-container .tab-panel')
var menu = document.querySelector('.nav-icons')
var main = document.querySelector('main')

panels[0].style.display = 'flex'
panels[0].style.background = '#222'
buttons[0].style.background = '#222'

function showPanel(index, color){
  buttons.forEach(function(node){
    node.style.background = ''
    node.style.color = ''
  })
  buttons[index].style.background = color
  buttons[index].style.color = 'white'
  panels.forEach(function(node){
    node.style.display='none'
  })
  panels[index].style.display='flex'
  panels[index].style.background = color
  panels.forEach(function(item, index){
    // panels[index].innerHTML = ''
  })
}

/**
 * Scroll suave
 */
var menuItems = document.querySelectorAll('ul li a[href^="#"')
menuItems.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault()
    // debugger
    var element = e.path[1]
    var id = element.getAttribute('href')
    var top = document.querySelector(id).offsetTop
    if(window.screen.width <= 1024){
      top -= 40
    }

    // window.scroll({ 
    //   top: section.offsetTop,
    //   behavior: 'smooth'
    // })
    smoothScrollTo(0, top)
  })

})

function smoothScrollTo(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset;
  var startY = window.scrollY || window.pageYOffset;
  var distanceX = endX - startX;
  var distanceY = endY - startY;
  var startTime = new Date().getTime();
 
  duration = typeof duration !== 'undefined' ? duration : 400;
 
  // Easing function
  var easeInOutQuart = function(time, from, distance, duration){
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };
 
  var timer = setInterval(function (){
    var time = new Date().getTime() - startTime;
    var newX = easeInOutQuart(time, startX, distanceX, duration);
    var newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

/**
 * Toggle Menu
 */
var toggleMenu = function(){
  menu.classList.toggle('nav-icons-closed')
}
main.addEventListener('touchstart', function(){
  menu.classList.add('nav-icons-closed')
})