export default function NavBar() {
    return (
        <nav className="w4-hud">
            <div className="w4-hud-logo">Aether.Labs</div>
            <div className="w4-hud-nav">
                <a href="#s01">Servicios</a>
                <a href="#s02">Nosotros</a>
                <a href="#s03">Casos</a>
            </div>
            <a href="/reserva" className="w4-hud-cta">Hablemos →</a>
        </nav>
    );
}
