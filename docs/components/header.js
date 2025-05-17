class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            Dan Ripka
            <nav>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
        <hr class="divider" />
    `;
  }
}

customElements.define("header-component", Header);
