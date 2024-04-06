// Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq) : 
//   let myArr =  [1,3,4,2,2] // this is example. funksiya qaytarmalidir 2; Cunki 2 iki defe yazilib;
//   let myArr =  [1,3,4,4,]; funksiya qaytarmalidir 4; cunki 4 iki defe yazilib.



//   arr=[2,4,6,8,8,8,8]
//   function duplicate(arr,tekrar){
//     let say=0
//     for (let i = 0; i < arr.length; i++) {
//         if(tekrar==arr[i]){
//             say++
//         }
//     }
//     return say
//   }
//   console.log(duplicate(arr,8))


//   Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.
function faranheytSelsi(cevirme){
    let selsi=5/9*(faranheyt-32)
    return selsi
    
}console.log(faranheytSelsi(cevirme));