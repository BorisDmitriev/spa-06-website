const header = document.getElementsByClassName('heading')[0].closest('header')
header.style.borderWidth = '5px'
header.style.borderStyle = 'solid'

const info = document.getElementsByClassName('info')[0]
for (let i = 0; i < info.children.length; i++) {
    if( info.children.item(i).classList.contains('info-package') ){
        info.children.item(i).getElementsByClassName('package-title')[0].previousElementSibling.style.borderWidth = '2px' 
        info.children.item(i).getElementsByClassName('package-title')[0].previousElementSibling.style.borderStyle = 'solid' 
        info.children.item(i).getElementsByClassName('package-title')[0].previousElementSibling.style.borderColor = 'rgb(7, 47, 95)' 

        if( info.children.item(i).getElementsByTagName('label')[0].classList.contains('mild') ){
            info.children.item(i).getElementsByTagName('label')[0].style.borderWidth = '2px' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderStyle = 'solid' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderColor = 'yellow' 
        }else if( info.children.item(i).getElementsByTagName('label')[0].classList.contains('intense') ){
            info.children.item(i).getElementsByTagName('label')[0].style.borderWidth = '2px' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderStyle = 'solid' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderColor = 'orange' 
        }else{
            info.children.item(i).getElementsByTagName('label')[0].style.borderWidth = '2px' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderStyle = 'solid' 
            info.children.item(i).getElementsByTagName('label')[0].style.borderColor = 'red' 
        }


    }
}

const navList = document.querySelector('.nav-list').children
const siteMap = document.querySelector('.site-map')
Array.from(navList).forEach(el => {
    siteMap.append(el)
});
console.log(siteMap);
