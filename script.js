const section = document.querySelector("section")
const navItems = document.querySelectorAll("li");
const navLinks = document.querySelectorAll("a");
const videos = document.querySelectorAll("video");
const showAll = document.querySelector(".showAll");
const stopLoop = document.querySelector(".stopLoop");

setTimeout(function() {
  document.querySelector(".start").play();
}, 100)

navItems.forEach(function(item) {
  item.addEventListener("mouseover", showBorder);
});
navItems.forEach(function(item) {
  item.addEventListener("mouseout", hideBorder);
})
navLinks.forEach(function(item) {
  item.addEventListener("click", handleClick);
});
showAll.addEventListener("click", handleButtonClick2);
stopLoop.addEventListener("click", stopLooping);

function showBorder() {
  this.querySelector(".border").style.transform = "scale(1)";
}

function hideBorder() {
  this.querySelector(".border").style.transform = "scale(0)";
}

function handleClick(e) {
  e.preventDefault();
  document.querySelector(".start").style.display = "none";
  const clickedClass = this.className;

  section.classList.remove("adjustSection");
  videos.forEach(function(video) {
    video.classList.remove("visible");
    video.classList.remove("adjustVideo");
    video.pause();
    video.currentTime = 0;
    if (clickedClass === video.className) {

      video.classList.add("visible");
      video.play();
    }
  })

  // setTimeout(function(){
  //   videos.forEach(function(video){
  //     if (clickedClass === video.className) {
  //       video.classList.add("visible")
  //       video.play()
  //     }
  //   })
  // },250)
}

function handleButtonClick() {
  videos.forEach(function(video) {
    video.style.opacity = "1"
    video.style.width = "400px"
    switch (video.className) {
      case "strooi-route":
        video.style.right = "0"
        break;
      case "metro-route":
        console.log(video.offsetHeight)
        video.style.top = `${video.offsetHeight}px`
        break;
      case "tram-route":
        video.style.right = "0"
        console.log(video.offsetHeight)
        video.style.top = `${video.offsetHeight}px `
        break;
      case "trein-route":
        video.style.top = `${video.offsetHeight*2}px `
        break;
      case "schaats-route":
        video.style.right = "0"
        video.style.top = `${video.offsetHeight*2}px `
        break;
    }
    // video.classList.add("visible")
    video.currentTime = 0;
    video.play();
  })
}

function handleButtonClick2() {

  // Dit kunnnen allemaal css classes worden voor de scheiding
  section.classList.add("adjustSection");
  // section.style.flexWrap ="wrap";
  // section.style.flexDirection ="row";
  // section.style.width ="100%";
  document.querySelector(".start").style.display = "block";

  videos.forEach(function(video) {
    video.classList.add("visible")
    video.classList.add("adjustVideo")
    video.currentTime = 0;
    video.loop = true;
    video.play();
  })
};

function stopLooping(){
  videos.forEach(function(video){
    video.currentTime = 0;
    video.play();
    video.loop = false;
  })
};
