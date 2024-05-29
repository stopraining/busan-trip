const imageList = [
  "SkyCapsule",
  "AirCruise",
  "Gamcheon",
  "HaeundaeBeach",
  "HaedongYonggung",
];

const rightBtn = document.querySelector(".to-right");
const leftBtn = document.querySelector(".to-left");
const imageInner = document.querySelector(".circles-inner ");

//main background-image
let topBackground = document.querySelector("section.background-img");
let currentIndex = 0;

function showImage(index) {
  topBackground.style.backgroundImage = `url("./images/attractions/${imageList[index]}.jpeg")`;
}
function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length; //取餘數
  showImage(currentIndex);
}
showImage(currentIndex); // 初始化輪播第一張圖片
setInterval(nextImage, 3000); // 輪播間隔時間（毫秒）

//info-circles
rightBtn.addEventListener("click", () => {
  imageInner.scrollLeft += 200;
});

leftBtn.addEventListener("click", () => {
  imageInner.scrollLeft -= 200;
});
