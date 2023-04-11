import React from 'react';
import './secaoprodutos.css';
function SecaoProdutos(){
    return(
        <article className='secao-produtos' id='produtos'>
            <section className='texto-produtos'>
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </section>
            <section className='secao-fotos-oculos'>
                <div className='box-oculos'>
                    <h3>Óculos de grau</h3>
                    <img src='assets/oculos01.png' alt='img-oculos'/>
                    <p>R$ 500,00</p>
                </div>
                <div className='box-oculos'>
                    <h3>Óculos transition</h3>
                    <img src='assets/oculos02.png' alt='img-oculos'/>
                    <p>R$ 750,00</p>
                </div>
                <div className='box-oculos'>
                    <h3>Óculos de sol</h3>
                    <img src='assets/oculos03.png' alt='img-oculos'/>
                    <p>R$ 700,00</p>
                </div>
                <div className='box-oculos'>
                    <h3>Óculos infantil</h3>
                    <img src='assets/oculos04.png' alt='img-oculos'/>
                    <p>R$ 500,00</p>
                </div>
            </section>
            <section className='garantia-oculos'>
                <p>Todos os nossos produtos incluem:</p>
                <ul className='garantia-oculos-lista'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </section>
        </article>
    );
}
export default SecaoProdutos;