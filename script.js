// let outputText = document.querySelector('.output')
// let colorBox = document.querySelector('.color-palette')
// colorBox.addEventListener('click', changeColor)
// function changeColor(event){
//     if(event.target.nodeName !== "BUTTON"){
//         return
//     }
//     let selectColor = event.target.dataset.color;
//     outputText.textContent = `Selected color: ${selectColor}`
//     outputText.style.color = selectColor;
// }
// createButton()
// function createButton(){
//     let buttons = [];
//     for(let i = 0; i < 60; i++){
//         let randomColor = addRandomThree()
//         let button = document.createElement('button')
//         button.type = 'button'
//         button.classList.add('item')
//         button.dataset.color = randomColor
//         button.style.backgroundColor = randomColor
//         buttons.push(button)
//     }
//     colorBox.append(...buttons)
// }
// function getRandomColor(){
//     return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }
// function addRandomThree(){
//     return `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`
// }

const images = [   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',   
      description: 'Hokkaido Flower',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',   
      description: 'Container Haulage Freight',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',   
      description: 'Aerial Beach View',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',   
      description: 'Flower Blooms',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',   
      description: 'Alpine Mountains',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',   
      description: 'Mountain Lake Sailing',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',   
      description: 'Alpine Spring Meadows',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',   
      description: 'Nature Landscape',   
    },   
    {   
      preview:   
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',   
      original:   
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',   
      description: 'Lighthouse Coast Sea',   
    },  
]
let containerImage = document.querySelector('.container')

createBox()
function createBox(){
        images.forEach(item => {
          let imageBox = document.createElement('img')
          imageBox.classList.add('image__box')
          imageBox.src = item.preview
          containerImage.appendChild(imageBox)
        })
        }
containerImage.addEventListener('click', openModal)
function openModal(event){
  images.forEach(element => {
    if(event.target.nodeName === "IMG"){
      const modal = document.querySelector('.modal');
      const img = document.querySelector('.modal__image');
      img.src = element.original
      modal.style.display = 'block'
      closeModal.style.display = 'block'
    }
  })
}
let closeModal = document.querySelector('.modal__close')
closeModal.addEventListener('click', function(){
  document.querySelector('.modal').style.display = 'none'
  closeModal.style.display = 'none'
})