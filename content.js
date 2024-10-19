let body = document.querySelector('body')
console.log(body)


console.log('Dom Loaded');
setTimeout(() => {
  console.log('dom loaded .5 seconds ago')
  let alinks = document.querySelectorAll(".Grouping-styles__items");

  let date = document.querySelector(".Day-styles__secondary");

  let class_name = document.querySelectorAll(".Grouping-styles__title");

  let assignment_title = alinks.map((element => element.querySelector("a")))


  console.log(alinks);
}, 500)

chrome.runtime.sendMessage({ type: "LINKS", list: alinks});





