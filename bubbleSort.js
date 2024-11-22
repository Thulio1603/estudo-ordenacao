function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Loop externo, percorre o array várias vezes
  do {
    swapped = false;

    // Loop interno, percorre o array comparando elementos adjacentes
    for (let i = 0; i < n - 1; i++) {
      // Se o elemento atual for maior que o próximo, troque-os
      if (arr[i] > arr[i + 1]) {
        // Troca os elementos
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // Marca que houve troca
        swapped = true;
      }
    }

    // Após cada iteração, o maior elemento já estará na última posição
    n--; // Reduz o número de comparações
  } while (swapped); // Continua até não haver mais trocas

  return arr;
}
