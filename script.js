const navItems = document.querySelectorAll("li");
const navLinks = document.querySelectorAll("a");
const imgs = document.querySelectorAll("img");

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
  const clickedClass = this.className

  console.log(this.className)
  imgs.forEach(function(img){
    img.classList.remove("visible")
    if(clickedClass === img.className){
      img.classList.add("visible")
      console.log(img)
    }
  })
}
