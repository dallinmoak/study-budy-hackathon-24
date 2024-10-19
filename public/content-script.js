const indexUrl = chrome.runtime.getURL("index.html");
console.log(indexUrl);
fetch(indexUrl)
  .then((response) => response.text())
  .then((html) => {
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);
  });

// const myIframe = document.createElement("iframe");
// myIframe.src = indexUrl;
// document.body.appendChild(myIframe);
