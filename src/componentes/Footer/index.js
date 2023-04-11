import React from 'react';
import './footer.css';
function Footer() {
    return (
        <footer className='footerFaleConosco' id='contato'>
            <section className='boxFaleConosco'>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </section>
            <section className='ContatoRedes'>
                <section className='contato'>
                    <h4>Contato</h4>
                    <div className='boxContato'>
                        <img src='assets/local.png' />
                        <p>Brasília, DF</p>
                    </div>
                    <div className='boxContato'>
                        <img src='assets/telefone.png' />
                        <p> (61) 9999-9999</p>
                    </div>
                    <div className='boxContato'>
                        <img src='assets/email.png' />
                        <p>contato@oticasvida.com</p>
                    </div>
                </section>
                <section className='redesSociais'>
                    <h4>Nossas Redes Sociais</h4>
                    <div className='boxContato'>
                        <img src='assets/fb.png' />
                        <p>/OticasVida</p>
                    </div>
                    <div className='boxContato'>
                        <img src='assets/ig.png' />
                        <p>@oticasvidaDF</p>
                    </div>
                    <div className='boxContato'>
                        <img src='assets/tt.png' />
                        <p>@oticasvidaDF</p>
                    </div>
                </section>
            </section>
            <section className='direitosReservados'>
                <p>© 2023 Óticas Vida - Criado por <a href="https://www.linkedin.com/in/jhony-dias/" target='_blank'>Jhony Dias</a></p>
            </section>
        </footer>
    );
}
export default Footer;