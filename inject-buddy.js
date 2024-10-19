console.log("inserting buddy");
let buddy = document.createElement("iframe");
buddy.id = "buddy";
buddy.src = "https://real-buddy-hack-24.vercel.app";

const style = document.createElement("style");
style.textContent = `
  #buddy {
    position: fixed;
    scrollbar-width: none;
    -ms-overflow-style: none;
    width: 211px;
    height: 400px;
    border: none;
    overflow: hidden;
    right: 0;
    bottom: 0;
    z-index: 999999;
  }
  iframe::-webkit-scrollbar {
    display: none; /* Hide scrollbar in iframe */
  }
`;
document.head.appendChild(style);
document.body.insertAdjacentElement("afterbegin", buddy);
