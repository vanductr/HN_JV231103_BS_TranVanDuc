function findMaxUnique() {
  const inputString = document.getElementById("numberInput").value;
  const numbers = inputString.split(" ").map(Number);

  const maxUniqueNumber = findMaxUniqueNumber(numbers);

  // Update table with the result
  const resultCell = document.getElementById("resultCell");
  resultCell.textContent = maxUniqueNumber;

  // Clear input
  document.getElementById("numberInput").value = "";
}

function findMaxUniqueNumber(numbers) {
  // Sorting array in descending order
  numbers.sort((a, b) => b - a);

  // Finding the first unique number
  let maxUniqueNumber;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0 || numbers[i] !== numbers[i - 1]) {
      maxUniqueNumber = numbers[i];
      break;
    }
  }

  return maxUniqueNumber;
}