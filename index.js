
import { data } from './assets/constans.js'


function createSlide (products, main) {
    let slideWrapper=document.querySelector(main)

    products.forEach((item,index)=>{
        let product=document.createElement('div')
        product.style.width='19.6%',
        product.style.height='500px'
        index?product.style.marginLeft='7%':product.style.marginLeft='0%'
        let productImg=document.createElement('div')
        productImg.className='productImg'
        productImg.style.backgroundImage=`url(./assets/images/${item.img}.png)`
        let productTitle=document.createElement('p')
        productTitle.innerHTML=item.title
        let productPrice=document.createElement('p')
        productPrice.className='productPrice'
        productPrice.innerHTML=item.price
        let starsImg=document.createElement('div')
        starsImg.className='starsImg'
        starsImg.style.backgroundImage=`url(./assets/images/${item.stars}.png)`
        product.append(productImg)
        product.append(productTitle)
        product.append(productPrice)
        product.append(starsImg)
        slideWrapper.append(product)
    })
   
}

createSlide (data.products,'.productSlideWrapper' )
createSlide (data.bestsellers,'.bestsellerSlideWrapper')
