const contain = document.querySelector('.contain');
var piker = document.createElement('INPUT');
piker.setAttribute('type','color',);
piker.setAttribute("onchange","colorpiker()")
piker.className='copiker';
const size = document.createElement('button');
const eraz = document.createElement('button');
const buttonContain = document.querySelector('.buttons');

function createdivs(col , rows)
{
    for(let i=0 ; i<(col * rows) ; i++)
    {
        const div = document.createElement('div')
        div.style.border='1px solid black';
        contain.style.gridTemplateColumns = `repeat(${col} , 1fr)`;
        contain.style.gridTemplateRows = `repeat(${rows},1fr)`;
        contain.appendChild(div).classList.add('box');
    }
}
createdivs(24,24)

 function colorpiker()
{
    const boxs = contain.querySelectorAll('.box')
    piker.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
             let R= Math.floor(Math.random(piker) * 255);
             let G = Math.floor(Math.random(piker) * 0);
             let B = Math.floor(Math.random(piker) * 0);
            let RGB = `rgb(${R},${G},${B})`
            box.style.background = RGB;
        }))
    })
    buttonContain.appendChild(piker).classList.add('copiker')
}
colorpiker()


function erazbox()
{
    const boxs=contain.querySelectorAll('.box')
    eraz.textContent = 'ERAZER'
    eraz.addEventListener('click',()=>
    {
        boxs.forEach(box=>box.addEventListener('mouseover',()=>
        {   
            box.style.background='Transparent';
        }))
    })
    buttonContain.appendChild(eraz).classList.add('btn')
}
erazbox()


function reset()
{
    const boxs = contain.querySelectorAll('.box')
    boxs.forEach(box => box.remove()) 
}

function resize()
{
    size.textContent = 'GRID SIZE'
    size.addEventListener('click',()=>
    {
        let user = prompt('Enter your grid size.')
        if(user === null || user < 1)
        {
            reset()
            createdivs(24,24)
            colorpiker()
            erazbox()
        }
        else
        {
            reset()
            createdivs(user,user)
            colorpiker()
            erazbox()
        }
    })
    buttonContain.appendChild(size).classList.add('btn')
}
resize()
