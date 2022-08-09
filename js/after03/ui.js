const root = document.getElementById('root')
const pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', () => {
    clearUI()
    renderPauseScreen()
})

function clearUI() {
    root.innerHTML = ''
}

function renderPauseScreen() {
    const saludo = document.createElement('h3')
    saludo.innerText = 'Juego en pausa'
    root.append(saludo)
}