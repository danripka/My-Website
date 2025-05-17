class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <hr class="divider" />
        <footer>
            <nav>
                <a href="https://www.linkedin.com/in/dan-ripka" target="_blank">LinkedIn</a>
                <a href="https://x.com/DanRipka" target="_blank">X</a>
                <a href="https://github.com/danripka" target="_blank">Github</a>
            </nav>
        </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
