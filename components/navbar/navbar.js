function first () {
let div = document.createElement('div');
let imgDiv = document.createElement('div');
div.className = "navbar";
imgDiv.className='img';
let res=document.querySelector('.slide1')

div.appendChild(imgDiv)
res.appendChild(div)

}

function createList () {
    let list=['new','our products','devices', 'eLiquids', 'Starter Kits', 'Brands']
    let ul = document.createElement('ul');
    for (let i=0; i<list.length; i++) {
        let li = document.createElement('li');
        li.innerHTML=list[i]
        ul.append(li)

    }
    let navbar=document.querySelector('.navbar')
    navbar.append(ul)
}

function createNavbarSignInPart () {
    let div = document.createElement('div');
    div.className='signinSearchLangWrapper';
    let imgLang = document.createElement('div');
    imgLang.className='imgLang'
    let imgArrow = document.createElement('div');
    imgArrow.className='imgArrow'
    let imgSearch = document.createElement('div');
    imgSearch.className='imgSearch'
    let imgBasket = document.createElement('div');
    imgBasket.className='imgBasket'
    let span = document.createElement('span');
    span.className='signinText'
    span.innerHTML='SIGN IN'
    div.append(imgLang)
    div.append(imgArrow)
    div.append(span)
    div.append(imgSearch)
    div.append(imgBasket)
    let navbar=document.querySelector('.navbar')
    navbar.append(div)
}


// function second () {
    
// let div1 = document.createElement('div');
// div1.className = "navbar";
// div1.innerHTML='hdfhjdhfdjhfhdjhfjhdjh'
// let res1=document.querySelector('.slide2')
// res1.appendChild(div1)

    
//     }


    first()
    createList()
    createNavbarSignInPart ()

