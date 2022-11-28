// const amountCategories = document.querySelector('#categories');
// const listenItem = document.querySelectorAll('.item');
// console.log(listenItem)
// console.log = (`Number of categories: ${listItem.length}`);
// for (let i = 0; i < listenItem.length; i +=1){
//     cosole.log("category: ${listenItem[i].querySelector('h2').textContent}" );
//      console.log("Elements: ${listenItem[i].querySelectorAll('ul li').length}" );
// }
// const refs = {
// amountCategories: document.querySelector('#categories'),
// listenItem: document.querySelectorAll('.item')}

// console.log(`Number of categories: ${refs.listItem.length}`);
// for (let i = 0; i < refs.listenItem.length; i += 1){
//     cosole.log(`category: ${refs.listenItem[i].querySelector('h2').textContent}` );
//      console.log(`Elements: ${refs.listenItem[i].querySelectorAll('ul li').length}` );
// }


const refs = {
 mainUl: document.querySelector('#categories'),
 secondUl: document.querySelectorAll('.item')
}
console.log(`Number of categories:${refs.secondUl.length}` )
for( let i = 0; i < refs.secondUl.length; i += 1){
console.log(`Category: ${refs.secondUl[i].querySelector('h2').textContent}`)
console.log(`Elements: ${refs.secondUl[i].querySelectorAll('ul li').length}`)
}