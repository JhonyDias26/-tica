import React from 'react';
import './secaobox.css';
function Secaobox (){
    return(
        <section className='box-quem-somos'>
                <div className='inverter'>
                    <div className='secaobox1'>
                        <img src='assets/loja.png' alt='img-atendimento'/>
                    </div>
                    <div className='secaobox1'>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e pela América</p>
                    </div>
                </div>
                <div className='secaobox2'>
                    <h3>ATENDIMENTO FLEXÍVEL</h3>
                    <p>Nossa equipe é treinada para te atender</p>
                </div>
                <div className='secaobox2'>
                    <img src='assets/atendimento.png' alt='img-atendimento'/>
                </div>
            </section>
    );
}
export default Secaobox;