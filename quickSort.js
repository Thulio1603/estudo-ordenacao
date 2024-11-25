function quickSort(arr) {
  // Caso base: se o array tiver 0 ou 1 elementos, já está ordenado
  if (arr.length <= 1) {
    return arr;
  }

  // Escolher o pivô (neste caso, vamos escolher o último elemento do array)
  const pivot = arr[arr.length - 1];

  // Arrays para armazenar os elementos menores e maiores que o pivô
  let left = [];
  let right = [];

  // Loop para separar os elementos em dois arrays, menores e maiores que o pivô
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursivamente ordenar as duas metades (menores e maiores)
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exemplo de uso
// const arr = [10, 7, 8, 9, 1, 5];
// console.log("Array Original:", arr);
// const sortedArr = quickSort(arr);
// console.log("Array Ordenado:", sortedArr);
