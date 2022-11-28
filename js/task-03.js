const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('.gallery');
// const arr = [];
// for (let i = 0; i < images.length; i += 1) {
//   const newItem = document.createElement('li');
//   const newImg = document.createElement('img');
//   newImg.classList.add('size');
//   newImg.setAttribute('src', images[i].url);
//   newImg.setAttribute('alt', images[i].alt);
//   newItem.append(newImg);
//   console.log(newItem);
//   arr.push(newItem);
//   gallery.style.display = "flex";
//   gallery.style.listStyle = "none";
// }
// gallery.append(...arr);
const galleryElem = document.querySelector('.gallery');
const elements = images.map((image) => `<li> 
  <img src = "${image.url}" alt = "${image.alt}" 
  width = "400px"
  heidht = "250px"
  </li>`);
galleryElem.insertAdjacentHTML('beforeend', elements.join(''));
galleryElem.style.cssText = `displey: flex;
align-items: center;
justify-content: space-between;
list-style-type: none;
margin: 50px 50 px;
padding: 0;
`;