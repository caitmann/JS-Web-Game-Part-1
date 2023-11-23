function newImage(imageSource, positionLeft, positionBottom) {
    let newCharacter = document.createElement('img')
    newCharacter.src = imageSource
    newCharacter.style.position = 'fixed'
    newCharacter.style.left = positionLeft
    newCharacter.style.bottom = positionBottom
    document.body.append(newCharacter)
    return newCharacter
}

function newItem(imageSource, positionLeft, positionBottom) {
    let newInventoryItem = newImage(imageSource, positionLeft, positionBottom)
    newInventoryItem.addEventListener('dblclick', () => {
        newInventoryItem.remove()
    })
}

let greenCharacter = newImage('assets/green-character.gif', '100px', '100px')
let pineTree = newImage('assets/pine-tree.png', '450px', '200px')
let tree = newImage('assets/tree.png', '200px', '300px')
let pillar = newImage('assets/pillar.png', '350px', '100px')
let crate = newImage('assets/crate.png', '150px', '200px')
let well = newImage('assets/well.png', '500px', '425px')

let sword = newItem('assets/sword.png', '500px', '405px')
let shield = newItem('assets/shield.png', '165px', '185px')
let staff = newItem('assets/staff.png', '600px', '100px')

function createBackground(imageSource, xPosition) {
    let newPiece = document.createElement('img')
    newPiece.src = imageSource
    newPiece.style.zindex = '-1'
    newPiece.style.position = 'fixed'
    newPiece.style.left = xPosition
    newPiece.style.bottom = xPosition
    document.body.append(newPiece)
    return newPiece
}