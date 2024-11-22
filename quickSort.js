function quickSort(arr) {
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
