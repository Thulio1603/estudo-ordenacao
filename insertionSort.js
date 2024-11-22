function insertionSort(arr) {
  // Percorre todos os elementos do array
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // O elemento atual
    let j = i - 1; // A posição do elemento anterior

    // Move os elementos do array que são maiores do que o 'current' para uma posição à frente
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j]; // Move o elemento para a direita
      j--; // Decrementa o índice
    }

    // Coloca o elemento 'current' na posição correta
    arr[j + 1] = current;
  }

  return arr;
}
