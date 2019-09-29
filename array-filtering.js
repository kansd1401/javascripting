const numbers = [1,2,3,4,5,6,7,8,9,10]
const filtered = []

function evenNumbers (number) {  
       return number % 2 === 0
 
     }  
   

for (i=0;i<10;i++){
	if (evenNumbers(numbers[i]) != 0){
		filtered.push(numbers[i])
	}	
}
console.log(filtered)
