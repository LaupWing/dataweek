const navItems = document.querySelectorAll("li");
const navLinks = document.querySelectorAll("a");
const videos = document.querySelectorAll("video");
document.querySelector(".start").play();
navItems.forEach(function(item){
  item.addEventListener("mouseover", showBorder);
});
navItems.forEach(function(item){
  item.addEventListener("mouseout", hideBorder);
})
navLinks.forEach(function(item){
  item.addEventListener("click", handleClick);
});

function showBorder(){
  this.querySelector(".border").style.transform ="scale(1)";
}

function hideBorder(){
  this.querySelector(".border").style.transform ="scale(0)";
}

function handleClick(e){
  e.preventDefault();
  document.querySelector(".start").style.display = "none"
  const clickedClass = this.className

  console.log(this.className)
  videos.forEach(function(video){
    video.classList.remove("visible")
    video.pause();
    video.currentTime = 0;
    if(clickedClass === video.className){
      video.classList.add("visible")
      video.play()
    }
  })
}
