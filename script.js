let gridDiv = document.createElement('div')
gridDiv.display = 'flex'
gridDiv.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    heigth:960px;
`

let gridContainer = document.querySelector('#gridContainer')
gridContainer.appendChild(gridDiv)

function chooseSize (){
    let sideSquares = prompt('Choose number of squares per side')
    gridDiv.innerHTML = ""
    chargesGrid(sideSquares)
}


function chargesGrid (sideSquares){
    if (sideSquares>100) return null

    let totalSquares = sideSquares*sideSquares
    let side = 960/sideSquares
    for (let i = 1; i<=totalSquares;i++){
        let itemDiv = document.createElement('div')
        itemDiv.style.cssText=`
                padding: 4px;
                width: ${side}px;
                height:${side}px;
                box-sizing: border-box;
                border: 1px solid black;
            `
        itemDiv.addEventListener('mouseover', ()=>{
            itemDiv.style.backgroundColor ='blue'
        })
        gridDiv.appendChild(itemDiv)
    }
    
}
chargesGrid(16)

let sizeButton = document.querySelector('#sizeButton')
sizeButton.style.cssText = `
    margin: 10px;
    width: 200px;
    height: 30px;
`
sizeButton.addEventListener('click', chooseSize)