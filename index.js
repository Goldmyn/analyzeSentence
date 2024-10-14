function analyzeSentence(sentence) {
  // Initialize counters
  let charCount = 0;
  let wordCount = 0;
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";

  // Remove the period at the end for easier processing
  sentence = sentence.trim();
  if (sentence.endsWith(".")) {
    sentence = sentence.slice(0, -1);
  }

  // Iterate over the sentence character by character
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Count characters
    charCount++;

    // Count vowels
    if (vowels.includes(char)) {
      vowelCount++;
    }

    // Count words
    if (i === 0 && char !== " ") {
      wordCount++; // First word
    } else if (char === " " && sentence[i + 1] !== " ") {
      wordCount++; // New word after a space
    }
  }

  // Output the results
  console.log(`Length of the sentence (without period): ${charCount}`);
  console.log(`Number of words: ${wordCount}`);
  console.log(`Number of vowels: ${vowelCount}`);
}

// Example usage
const sentence = "Hello world this is a test sentence.";
analyzeSentence(sentence);
