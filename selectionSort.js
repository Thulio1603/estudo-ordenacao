function selectionSort(arr) {
  const n = arr.length;
  // Passa por todos os elementos do array
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume que o elemento atual é o menor
    // Encontra o índice do menor elemento no restante do array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Atualiza o índice do menor elemento
      }
    }
    // Se o menor elemento não for o elemento atual, faz a troca
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr; // Retorna o array ordenado
}
