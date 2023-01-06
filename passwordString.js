
class PasswordString {
    constructor() {
        this.symbols = []
        this.numbers = []
        this.upperCase = []
        this.lowerCase = []
    }
    generateSymbols() {
        for (let i = 32; i <= 47; i++) {
            this.symbols.push(String.fromCharCode(i))
        }
        for (let i = 58; i <= 64; i++) {
            this.symbols.push(String.fromCharCode(i))
        }
        for (let i = 91; i <= 96; i++) {
            this.symbols.push(String.fromCharCode(i))
        }
        for (let i = 123; i <= 126; i++) {
            this.symbols.push(String.fromCharCode(i))
        }
    }

    generateNumbers() {
        for (let i = 48; i <= 57; i++) {
            this.numbers.push(String.fromCharCode(i))
        }
    }

    generateLetters() {
        for (let i = 65; i <= 90; i++) {
            this.upperCase.push(String.fromCharCode(i))
        }
        for (let i = 97; i <= 122; i++) {
            this.lowerCase.push(String.fromCharCode(i))
        }
    }

    generate() {
        this.generateLetters()
        this.generateNumbers()
        this.generateSymbols()
    }

    get characters() {
        return {
            noSymbols: [...this.numbers, ...this.upperCase, ...this.lowerCase],
            allCharacters: [...this.symbols, ...this.numbers, ...this.upperCase, ...this.lowerCase]
        }
    }
}