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
            </nav>
        </header>
        <hr class="divider" />
    `;
  }
}

customElements.define("header-component", Header);
