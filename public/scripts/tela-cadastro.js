function populateUfs(){
    const ufSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json() )
    .then( states =>{
         
        for(const state of states ){
            ufSelect.innerHTML += `<option value= "${state.id}">${state.nome}</option>`
        }
    })
}

populateUfs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]");
    const cityInput = document.querySelector("select[name=state]");


    const ufValue = event.target.value;

    
    const indexOfSelectedState = event.target.selectedIndex
    //stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true;


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
         
        for(const city of cities ){
            citySelect.innerHTML += `<option value= "${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [2,3]

function handleSelectedItem(event){
    const itemLi = event.target

    //Adicionar  ou remover uma classe 
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id



    //Verifica se existe itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })



    if(alreadySelected >= 0){
       const filteredItems = selectedItems.filter(item => {
           const itemIsDifferent = item != itemId
            return itemIsDifferent
       })
       selectedItems = filteredItems
    } else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems

}     

