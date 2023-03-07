const contain = document.querySelector('.contain');
const piker = document.createElement('INPUT');
piker.setAttribute("type","color")
const size = document.createElement('button');
const eraz = document.createElement('button');
const buttonContain = document.querySelector('.buttons')

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
    const boxs = contain.querySelectorAll(".box")
    piker.textContent = 'COLOR PIKER'
    piker.addEventListener('click' , ()=>
    {
       boxs.forEach(box=>box.addEventListener('mouseover',()=>
       {
            let R = Math.floor(Math.random()*256)
            let G = Math.floor(Math.random()*256)
            let B = Math.floor(Math.random()*256)
            box.style.background = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
       }))
        
    })
    buttonContain.appendChild(piker).classList.add('INPUT')
}
colorpiker()

// function colorpiker()
// {
// const ros = document.querySelectorAll(".box");

// piker.addEventListener('click' , ()=>
// {
//   ros.forEach(box=>box.addEventListener('mouseover',()=>
//   {
//     ro.style.backgroundColor = color;
//   }))
// })
// buttonContain.appendChild(piker).classList.add('INPUT')
// }
// colorpiker()

function erazbox()
{
    const boxs=contain.querySelectorAll('.box')
    eraz.textContent = 'ERAZER'
    eraz.addEventListener('click',()=>
    {
        boxs.forEach(box=>box.addEventListener('mouseover',()=>
        {   
            box.style.background='white';
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





















// function createGrid(a) 
// {
//     var container = document.getElementById("box");
//     for (var row=0; row<a; row++) 
//     {
//         for (var col=0; col<a; col++) 
//         {
//             var newDiv = document.createElement("div");
//             newDiv.classList.add("grid");
//             container.appendChild(newDiv);
//         };
//     };
//     var gridItems = document.querySelectorAll(".grid");
//     gridItems.forEach(function (item) {
//         item.style.width = (1000/ a) + "px"; 
//         item.style.height = (1000/ a) + "px";
//     });
// };

// function clearGrid() 
// {
//     var gridItems = document.querySelectorAll(".grid");
//     gridItems.forEach(function (item) 
//     {
//         item.remove();
//     });
// };

// function refreshGrid() 
// {
//     var z = prompt("How many boxes per side?");
//     clearGrid();
//     createGrid(z);
// };

// document.addEventListener("DOMContentLoaded", function () 
// {
//     createGrid(24);

//     var gridItems = document.querySelectorAll(".grid");
//     gridItems.forEach(function (item) 
//     {
//         item.addEventListener("mouseover", function () 
//         {
//             this.style.backgroundColor = "red";
//         });
//     });

//     var newGridButton = document.querySelector(".newGrid");
//     newGridButton.addEventListener("click", function () 
//     {
//         refreshGrid();

//         var gridItems = document.querySelectorAll(".grid");
//         gridItems.forEach(function (item) {
//             item.addEventListener("mouseover", function () 
//             {
//                 this.style.backgroundColor = "red";
//             });
//         });
//     });
// });
