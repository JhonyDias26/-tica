import React from 'react'
import Secaobox from '../Secaobox';
import './quemsomos.css'
function QuemSomos(){
    return(
        <section>
            <section className='quem-somos' id='sobre'>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </section>
            <Secaobox />
        </section>
    );
}
export default QuemSomos;