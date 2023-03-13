class ButtonCount extends HTMLElement {
  constructor() {
    super();
    var count = 0;
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = "Times Clicked: 0";
    button.setAttribute("class", "button");
    shadow.appendChild(button);
    button.addEventListener("click", function () {
      count = count + 1;
      console.log(count);
      button.innerHTML = `Times Clicked: ${count}`;
    });
  }
}
customElements.define("button-count", ButtonCount);
