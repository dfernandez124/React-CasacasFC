import "./Contacto.css";
export default function Contacto() {
    return (

        <div className="main-contacto">
            <section className="contacto">
                <h2>Contactanos</h2>
                <div className="contacto-contenedor">
                    <form className="formulario-contacto">
                        <input type="text" name="nombre" placeholder="Nombre completo" required></input>
                        <input type="email" name="email" placeholder="Correo electrónico" required></input>
                        <input type="text" name="asunto" placeholder="Asunto" required></input>
                        <textarea name="mensaje" placeholder="Escribí tu mensaje..." rows="5" required></textarea>
                        <button type="submit" className="button">Enviar</button>

                    </form>
                    <div className="info-contacto text-center">
                        <p>📧 contacto@casacasfc.com</p>
                        <p>📱 +54 9 11 1234-5678</p>
                        <p>🕒 Lunes a Viernes de 9 a 18 hs</p>
                        <p>📍 Alto Rosario Shopping Local 42 - Junin 501 - Rosario, Santa Fe, Argentina</p>
                        <div className="mapa">
                            <div className="map-container" style={{ width: "100%", height: "400px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.265810654857!2d-60.669643489213954!3d-32.92733097843805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654abc3ab1d5f%3A0x2f90ce97db2c5a6!2sAlto%20Rosario%20Shopping.!5e0!3m2!1ses-419!2sar!4v1751231028287!5m2!1ses-419!2sar"
                                    style={{ border: 0, width: "100%", height: "100%" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </div>
    )
} 