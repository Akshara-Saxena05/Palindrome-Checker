const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const Palindrome = text => {
  const originalInput = text; // Store for later output

  if (text === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lower = text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let result = `<strong>${originalInput}</strong> ${
    lower === [...lower].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const para = document.createElement('p');
  para.className = 'user-input';
  para.innerHTML = result;
  resultDiv.appendChild(para);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
  Palindrome(textInput.value);
  textInput.value = '';
});
