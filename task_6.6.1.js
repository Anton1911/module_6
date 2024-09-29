let word = prompt ('Введите слово');
let arrayWord = Array.from(word); // Перевод слова в массив
let reversArrayWord = Array.from(word).reverse(); // Массив в обратном порядке

// Сравнение исходного массива и перевернутого 
let isPalindrome = true;
for (let i = 0; i < arrayWord.length; i++) {
if (arrayWord[i] !== reversArrayWord[i])
    isPalindrome = false;
break;
}

if (isPalindrome) {
    console.log(`Слово ${word} является палиндром`);
}
else {
    console.log(`Слово ${word} не является палиндром`);
}
