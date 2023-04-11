import './App.css';
import Header from './componentes/Header';
import SecaoCapa from './componentes/SecaoCapa';
import SecaoProdutos from './componentes/SecaoProdutos';
import SecaoQuemSomos from './componentes/SecaoQuemSomos';
import Footer from './componentes/Footer';
function App() {
  return (
    <>
      <Header />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoQuemSomos />
      <Footer />
    </>
  );
}
export default App;