// function showRating(rating){
//     ratings = ''
//     for (i=1; i<= Math.floor(rating) ; i++){
//         if (i === Math.floor(rating)){
//             ratings += '*'
//         }
//         else{
//         ratings += '* '
//         }
//     }
//     if (!Number.isInteger(rating)){
//         ratings +=' .'
//     }
//     return ratings
// }

// console.log(showRating(3.5))

/* */

// function sortLowToHigh(arr){
//     return arr.sort((a,b) => a-b)
// }
// console.log(sortLowToHigh([7,3,5,2,1,9]))

/* */

// function sortByHighToLow(numbers) {
//   return numbers.sort((a, b) => {
//     return b.price - a.price
//   })
// }

// console.log(
//   sortByHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// );

/* */
//API's
// async function postsByUser(userId){
//     const promise = await fetch('https://jsonplaceholder.typicode.com/posts')   
//     const result =  await promise.json()

//     const post = result.filter(element => element.userId === userId)
//     console.log(post)
// }

// postsByUser(4)

/* */


async function firstSixIncomplete(notComplete){
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')   
    const result =  await promise.json()

    const inCompleteTasks = result.filter(element => !element.completed).slice(0,6)
    console.log(inCompleteTasks)
}

firstSixIncomplete(false)
