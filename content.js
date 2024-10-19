let body = document.querySelector('body');
console.log(body);


console.log('Dom Loaded');
setTimeout(() => {
  console.log('dom loaded .5 seconds ago')
  let alinks = document.querySelectorAll(".Grouping-styles__items");

  let date = document.querySelector(".Day-styles__secondary");
  date = getTextFromNodes(date);

  let class_name = document.querySelectorAll(".Grouping-styles__title");
  class_name = getTextFromNodes(class_name);

  let assignment_title = document.querySelectorAll(".Grouping-styles__items a:nth-child(2)");
  assignment_title = getTextFromNodes(assignment_title);

  let assignments = buildAssignmentJSON(assignment_title);

  console.log(assignments);


  // console.log("test");
  // console.log(alinks);  
  // console.log(date);
  // console.log(class_name);
  // console.log(assignment_title);

//  chrome.runtime.sendMessage({ type: "LINKS", list: alinks});
}, 3000);


//Takes in node array, returns string array
function getTextFromNodes(nodeList){
  let nodes = [];
  if(nodeList.innerHTML != undefined){
    nodes = [nodeList.innerHTML];
  }
  else {
    for (let i = 0; i < nodeList.length; i++) {
    let element = nodeList[i];
      nodes[i] = element.textContent;
    }
  }
  return nodes;
}

function buildAssignmentJSON(assignmentList){
  newJson = []
  count = 0;
  for (let i = 0; i < assignmentList.length; i++) {
    let assignment = assignmentList[i];
    
    let space_index = assignment.indexOf(" ");
    let type = assignment.substring(0,space_index);
    assignment = assignment.substring(space_index+1);

    if(type != "Announcement" && type != "Page"){
      let comma_index = assignment.indexOf(",");
      let name = assignment.substring(0, comma_index).trim();
      
      comma_index = assignment.indexOf(",");
      assignment = assignment.substring(comma_index+2);

      comma_index = assignment.indexOf(",");
      period_index = assignment.indexOf(".");
      let date_time = assignment.substring(comma_index+1, period_index).trim();

      
      let date = date_time.substring(0, date_time.length-8).trim();
      let time = date_time.substring(date_time.length-8).trim();

      newJson[count] = {
        "type": type,
        "name": name,
        "time": time,
        "date": date
      }
      count++;
    }
  }
  return newJson;
}

