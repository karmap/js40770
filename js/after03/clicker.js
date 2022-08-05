console.log('Clicker');

let resources = {
    coins: 0,
    diamons: 0,
    gold: 0
}

const addCoinsButton = document.getElementById('addCoins')
const addDiamonsButton = document.getElementById('addDiamons')
const addGoldButton = document.getElementById('addGold')

const coinsLabel = document.getElementById('coins')
const diamonsLabel = document.getElementById('diamons')
const goldLabel = document.getElementById('gold')

addCoinsButton.addEventListener('click', () => {
    resources.coins++
    updateResources()
})

addDiamonsButton.addEventListener('click', () => {
    resources.diamons++
    updateResources()
})

addGoldButton.addEventListener('click', () => {
    resources.gold++
    updateResources()
})

function updateResources() {
    console.log(resources.coins, resources.diamons, resources.gold);
    coinsLabel.innerText = resources.coins
    diamonsLabel.innerText = resources.diamons
    goldLabel.innerText = resources.gold
    saveToLocalStorage()
}

function saveToLocalStorage() {
    const resourcesJson = JSON.stringify(resources)
    localStorage.setItem('resources', resourcesJson)
}

function loadFromLocalStorage() {

    const resourcesJson = localStorage.getItem('resources')

    if ( !resourcesJson ) {
        return
    }

    const resourcesParsed = JSON.parse(resourcesJson)
    resources.coins = resourcesParsed.coins
    resources.diamons = resourcesParsed.diamons
    resources.gold = resourcesParsed.gold
    updateResources()
}

loadFromLocalStorage()