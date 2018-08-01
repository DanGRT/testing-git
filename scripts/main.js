const myImage = document.querySelector("#main-img")
myImage.onclick = function(){
  let mySrc = myImage.getAttribute("src")
  if (mySrc === "images/steamyhams.jpg"){
    myImage.setAttribute("src", "images/steamyblinds.jpg")
  }else{
    myImage.setAttribute("src", "images/steamyhams.jpg")
  }

}
