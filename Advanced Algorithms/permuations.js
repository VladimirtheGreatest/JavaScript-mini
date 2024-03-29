function permAlone(str) {
    // Create a regex to match repeated consecutive characters.
    var regex = /(.)\1+/;
  
    // Split the string into an array of characters.
    var arr = str.split("");
    var permutations = [];
    var tmp;
  
    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    // Function to swap variables' content.
    function swap(index1, index2) {
        console.log('swapping', index1, index2);
      tmp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = tmp;
    }
  
    // Generate arrays of permutations using the algorithm.
    function generate(int) {
        console.log('generating', int);
      if (int === 1) {
        console.log('end of the generate');
        // Make sure to join the characters as we create  the permutation arrays
        permutations.push(arr.join(""));
        console.log(permutations);
      } else {
        console.log('before for loop');
        for (var i = 0; i != int; ++i) {
            console.log(int - 1);
          generate(int - 1);
          swap(int % 2 ? 0 : i, int - 1);
        }
      }
    }
    generate(arr.length);

    // Filter the array of repeated permutations.
    var filtered = permutations.filter(x =>!x.match(regex));  
    // Return how many have no repetitions.
    return filtered.length;
  }
  
  // Test here.
  permAlone("aab");