//The good way of make a cast is with ***instanceof***

const canvas = document.querySelector('span');  //getTheSpans

if (canvas instanceof HTMLCanvasElement) { //false <- span is not an instanceof HTMLCanvasElement

   const context = canvas.getContext('2d');
   console.log(context)
}
