export const generateRandomTitleForPost = () => {
  
    let arrayOfNumber = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
  
    let length = arrayOfNumber[Math.floor(Math.random() * arrayOfNumber.length)];

    let currentLength = length;

    if(length < 5) currentLength += length;

    let result = '';
    
    let allCharacters = 'ASDFGHJKLMNBVCXZQWERTYUIOPzxcvbnmlkjhgfdsaqertyuiop';
    
    let counter = 0;
    
    while(counter < currentLength) {
      result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
      counter += 1;
    }
    
    return result;
}