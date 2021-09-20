//let itemList = []



/*let itemList = localStorage.getItem('items')
if(itemList)
{
    itemList = itemList.split(',')
}
else
{
    itemList = []
}


function addItem() 
{
    let name= document.getElementById('item').value

    if(name.length > 0)
    {
        itemList.push(name)
        localStorage.setItem('items', itemList)
        for( let i = 0; i < itemList.length; i++ )
        {
            console.log(itemList[i])
        }
        console.log('itemList 2', itemList)
    }
    else
    {
        alert('debes llenar el campo')
    }
} []*/



//let itemList = []


let itemList = localStorage.getItem('items')
/*if (itemList){
    itemList = itemList.split(',')
}else{
    itemList = []
}*/

itemList = []



function addItem() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let skill = document.getElementById('skill').value
    if (name && age && skill) {
        itemList.push({ 'name_key': name, 'age_key': age, 'skill_key': skill })
        let html = ''
        
        itemList.forEach((i, index) => {
            html += `
            
            <div class="row m-5" > 
            <div class="col" > 
            ${i.name_key}
            </div>
            <div class="col" > 
            ${i.age_key}
            </div>
            <div class="col" > 
            ${i.skill_key}
            </div>
            <div class="col" ><button type="button" class="btn btn-danger" onclick="eliminarItem(${index})">DELETE</button>
            </div> 
            </div>
            `
        })
        document.getElementById('showItemList').innerHTML = html
    }

}