const btnToggleMenu = document.querySelector('#btn-toggle-menu')
const topMenu = document.querySelector('#top-menu')
const listItemTopMenu = document.querySelectorAll('#top-menu a')
console.log(listItemTopMenu)

document.addEventListener('click',(e)=>{
    if(btnToggleMenu.contains(e.target)){
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-menu-responsive')
    }else{
        if(topMenu.classList.contains('ct-menu-responsive')){
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-menu-responsive')
        }
    }
})
listItemTopMenu.forEach(value=>{
    value.addEventListener('click',()=>{
        value.classList.add('ct-top-menu-item-active')
        console.log(listItemTopMenu[0])
    })
})