const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        BSale
                    </a>
                </h1>
            </div>
            <div class="Header-search">
                <input type="text" placeholder="Buscar">
            </div>
        </div>
    `;
    return view;
}

export default Header;