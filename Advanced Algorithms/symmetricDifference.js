//mathematics, the symmetric difference of two sets, also known as the disjunctive union, 
//is the set of elements which are in either of the sets, but not in their intersection. 
//For example, the symmetric difference of the sets {\displaystyle \{1,2,3\}}\{1,2,3\} and {\displaystyle \{3,4\}}\{3,4\} is {\displaystyle \{1,2,4\}}\{1,2,4\}.

//{\displaystyle A\,\triangle \,B=\left(A\setminus B\right)\cup \left(B\setminus A\right),}


const diff = (arr1, arr2) => [ ...arr1.filter(x => !arr2.includes(x)), ... arr2.filter(x => !arr1.includes(x))];

const sym = (...args) => [new Set(args.reduce(diff))];

sym([1,2,3], [5,2,1,4]); //should return 3, 5 ,4
