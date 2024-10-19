let body = document.querySelector('body');
console.log('Dom Loaded');
setTimeout(() => {
  past_button = document.getElementById("new_activity_button");
  future_button = document.querySelector(".css-s72gxh-view-link");

  let feuture_only_scrape = scrape();
  let past_scrape = {};
  future_button.click();
  
  setTimeout(() => {
    past_button.click();
  },3500);

  setTimeout(() => {
    past_scrape = scrape();
    console.log(feuture_only_scrape);
    
    
  },6000);

  setTimeout(() => {
    console.log(past_scrape);
    console.log(findLate(feuture_only_scrape, past_scrape));
  },7500);

  
}, 2500);

//Returns Integer of late assignments.
function findLate(feuture_only_scrape, past_scrape){
  let num_missing = 0;
  if(past_scrape.length == feuture_only_scrape.length){
    return -1;
  }
  else{
    let done = false;
    while (done == false && num_missing <=past_scrape.length) {
      done = past_scrape[num_missing].name == feuture_only_scrape[0].name;
      
      if(done){
        //decrement when found
        num_missing--;
      }
      num_missing++;
      }
  }
  return num_missing;
}

function scrape(){
  // let date = document.querySelector(".Day-styles__secondary");
  // date = getTextFromNodes(date);

  // let class_name = document.querySelectorAll(".Grouping-styles__title");
  // class_name = getTextFromNodes(class_name);

  let assignment_title = document.querySelectorAll(".Grouping-styles__items a:nth-child(2)");
  assignment_title = getTextFromNodes(assignment_title);

  let assignments = buildAssignmentJSON(assignment_title);

  return assignments
}

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

