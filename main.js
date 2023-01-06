

const form = document.querySelector('#options')
const root = document.querySelector('#root')

class PasswordGenerator {
    constructor(form, rootDispay) {
        this.optionSelect = form;
        this.rootDispay = rootDispay
        this.options = {}
        this.optionSelect.addEventListener('submit', this.generatePassword)
        this.passwordString = new PasswordString()
        this.passwordString.generate()
        this.characters = this.passwordString.characters
    }

    generatePassword = (e) => {
        e.preventDefault()
        const lengthInput = this.optionSelect.querySelector('input[type="number"]')
        const symbolsOn = this.optionSelect.querySelector('input[id="on"]')
        const symbolsOff = this.optionSelect.querySelector('input[id="off"]')
        this.options.length = +lengthInput.value || 15
        this.options.hasSymbols = symbolsOn.checked ? true : false
        this.options.hasNoSymbols = symbolsOff.checked ? true : false
        lengthInput.value = ''
        console.log(this.options)
        this.generateCharacterString()
    }

    random = (min, max) => {
        return Math.floor(Math.random() * max) + min
    }

    generateCharacterString = () => {


        this.charStringLeft = []
        this.charStringRight = []
        let selectedData = this.options.hasSymbols ? this.characters.allCharacters : this.characters.noSymbols

        for (let i = 0; i < this.options.length; i++) {

            let indexLeft = this.random(0, selectedData.length - 1)
            let indexRight = this.random(0, selectedData.length - 1)

            this.charStringLeft.push(selectedData[indexLeft])
            this.charStringRight.push(selectedData[indexRight])
        }
        this.render()


    }

    render() {
        const leftString = this.charStringLeft.join('')
        const rightString = this.charStringRight.join('')
        this.rootDispay.innerHTML = `
            <li>
                <i data-password = "${leftString}" class="fa-regular fa-copy icon"></i>${leftString}
            </li>
            <li>
                <i data-password = "${leftString}" class="fa-regular fa-copy icon"></i>${rightString}
            </li>
        `
        this.addClipboardEvent()
    }

    addClipboardEvent() {
        const icons = document.querySelectorAll('.icon')
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                const password = icon.dataset.password
                navigator.clipboard.writeText(password)
                alert('Password Copied')
            })
        })
    }

}

const passwordGen = new PasswordGenerator(form, root)

