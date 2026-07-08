//print even 
 
 
// let number =1
// for (number ; number <= 10 ; number++)
// {
// if (number % 2 == 0)
// {
//     console.log(number);
// }
// }


///---------------------------------

//largest


// const a=4
// const b= 6
// const c= 1
// console.log('the largest is')
// if (a>b && a>c)
// {
//     console.log(a);
// }
// else if (b>a && b>c)
// {
//     console.log(b);
// }
// else
// {
//     console.log(c);
// }

//---------------------

//sum

// function toadd(a,b,c)
// {
//     return a+b+c;
// }

// const a=4
// const b= 6
// const c= 1
// let sum
// let added= toadd(a,b,c);
// console.log(added);

//or

// function toadd(a,b,c)
// {
//     return sum=a+b+c;
// }
// console.log(sum);


//-------------

//palindrome

// const num = 121
// let real= num
//  let reverse = 0
// while(real>0)
// {
//     reverse = reverse*10 + (real % 10);
//     real = Math.trunc(real/10); 
// }
//  if(num == reverse)
//  {
//     console.log('palindrome')
//  }
//  else{
//     console.log('not palindrome')
//  }


 //-------------

//armstrong

let temp = 0
let i =0
console.log('The armstrong numbers are')
for (i ; i<10; i++)
    {
        temp = temp + i;
        console.log(temp);
    };
