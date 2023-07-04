const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
MAX_ATTEMPTS = 6,
MASK_CHAR = "_";
new Vue({
el: "#app",
data: () => ({
    letters: {},
    hiddenWord: [],
    remainingAttempts: 0,
}),
async mounted() {
    await Swal.fire(
    "Expulsado",
    "Proyecto Coderhouse",
    "info"
    );
    this.resetGame();
},
methods: {
    resetGame() {
    this.resetAttempts();
    this.setupKeys();
    this.chooseWord();
    },
    checkGameStatus() {
    if (this.playerWins()) {
        Swal.fire("Felicitaciones, Ganaste! " + this.getUnhiddenWord());
        this.resetGame();
    }
    if (this.playerLoses()) {
        Swal.fire("Expulsado , Dejaste a tu equipo con uno menos " + this.getUnhiddenWord());
        this.resetGame();
    }
    },
    getUnhiddenWord() {
    let word = "";
    for (const letter of this.hiddenWord) {
        word += letter.letter;
    }
    return word;
    },
    playerWins() {
      // Si hay al menos una letra oculta, el jugador aún no ha ganado
    for (const letter of this.hiddenWord) {
        if (letter.hidden) {
        return false;
        }
    }
    return true;
    },
    playerLoses() {
    return this.remainingAttempts <= 0;
    },
