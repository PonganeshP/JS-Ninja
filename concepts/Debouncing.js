/*

    Defn: Debouncing is a programming practice used to ensure that time-consuming tasks 
          do not fire so often, that it stalls the performance of the web page. 

    Application: Flipkart search, -> Listing items based on typed values.

*/

let count = 0;
function getData() {
  console.log("API call made", count++);
}

function superFunction(fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = [0, 1];
    clearTimeout(timer); //main logic(clearing and start timer again)
    timer = setTimeout(() => {
      fn.apply(context, args);
      //   getData();
    }, delay);
  };
}

const debounce = superFunction(getData, 400);
