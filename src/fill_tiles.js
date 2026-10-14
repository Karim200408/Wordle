const tileRows = document.querySelectorAll('.game-board .row');
const keyboardButtons = document.querySelectorAll('#keyboard button');
const message = document.querySelector('#message');

let currentRow = 0;
let currentTileIndex = 0;

keyboardButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const pressedKey = button.dataset.key;
    const currentRowTiles = tileRows[currentRow].querySelectorAll('.tile');

    if (pressedKey === 'BACKSPACE') {
      if (currentTileIndex > 0) {
        currentTileIndex = currentTileIndex - 1;
        currentRowTiles[currentTileIndex].textContent = '';
      }
      return;
    }

    if (pressedKey === 'ENTER') {
      if (currentTileIndex < 5) {
        message.textContent = 'Enter five letters';
        return;
      }

      if (currentRow >= tileRows.length - 1) {
        message.textContent = 'No more rows available';
        return;
      }

      currentRow = currentRow + 1;
      currentTileIndex = 0;
      message.textContent = 'Enter your next guess';
      return;
    }

    if (currentTileIndex >= 5) {
      return;
    }

    currentRowTiles[currentTileIndex].textContent = pressedKey;
    currentTileIndex = currentTileIndex + 1;
  });
});
