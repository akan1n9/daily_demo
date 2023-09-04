


// const findThree = function (arr, target) {
//     arr.sort((a, b) => a - b)
//     const result = [];
//     for (let i = 0; i < arr.length - 2; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             continue
//         }
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right) {
//             const sum = arr[i] + arr[left] + arr[right]
//             if (sum === target) {
//                 result.push([arr[i], arr[left], arr[right]])
//                 left++;
//                 right--;
//                 while (left < right && arr[left] === arr[left - 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right + 1]) {
//                     right--;
//                 }
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return result;
// }

// let t = findThree([5, 2, 1, 1, 3, 4, 6], 8)
// console.log(t);


function findSubstring(s, words) {
    const result = [];
    const wordsLength = words[0].length;
    const totalWords = words.length;
    const wordsCount = {}
    for (let word of words) {
        if (wordsCount[word]) {
            wordsCount[word]++
        } else {
            wordsCount[word] = 1;
        }
    }
    for (let i = 0; i <= s.length - wordsLength * totalWords; i++) {
        const seen = {}
        let j = 0;
        while (j < totalWords) {
            const currentWord = s.substr(i + j * wordsLength, wordsLength)
            if (!wordsCount[currentWord] || seen[currentWord] >= wordsCount[currentWord]) {
                break;
            }
            if (seen[currentWord]) {
                seen[currentWord]++;
            } else {
                seen[currentWord] = 1;
            }
            j++
        }
        if (j === totalWords) {
            result.push(i);
        }
    }
    return result;
}
