import React from 'react';
import './header.css';
function Header(){
    return(
        <header id='topo'>
            <figure>
                <a href='index.js'>
                    <img src='assets/logo.png' alt='nome-loja' className='img-header'/>
                </a>
            </figure>
            <ul className='lista-header'>
                <li><a href='#produtos'>PRODUTOS</a></li>
                <li><a href='#sobre'>SOBRE</a></li>
                <li><a href='#contato'>CONTATO</a></li>
            </ul>
        </header>
    );
}
export default Header;