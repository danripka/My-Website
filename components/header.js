class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            <h3 class="site-title">Dan Ripka</h3>
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <hr class="divider" />
    `;
  }
}

customElements.define("header-component", Header);
