import './App.css'
import BtnAgendar from './components/BtnAgendar';
import BannerImg from './assets/banner_right.jpg'
import CardTiposDeServicos from './components/CardTiposDeServicos';
import CardProfile from './components/CardProfile';
import ImgDefault from './assets/img-default.png'

function App() {
  return (
    <div className="home">
      <header>
        <a href="#">SOBRE NÓS</a>
        <p>|</p>
        <a href="#">REFERÊNCIAS</a>
      </header>

      <section className="banner">

        <div className="left-banner">
          <h1>OLÁ, BEM-VINDO (A)</h1>
          
          <div className="text-banner">
            <p>O Melhor Time De Conserto De Equipamentos De Academia Da Região!</p>
            <p>Com Profissionais Prontos Para Atender.</p>
          </div>
          
          <BtnAgendar />
        </div>

        <div className="right-banner">
          <img src={BannerImg} alt="Logo Banner" />
        </div>

      </section>

      <h2>TIPOS DE SERVIÇOS</h2>

      <div className="container-card-service">
        <div className="card-left">

          <CardTiposDeServicos title="Reparo de placas:" item1="Conserto & Manutenção" item2="Reparo de componentes" item3="Limpeza interna" />
        </div>

        <div className="card-right">

          <CardTiposDeServicos title="Buscamos no local" item1="Examinamos o equipamento" item2="Criamos o orçamento" item3="Buscamos com o caminhão" />
        </div>

        <div className="card-left">

          <CardTiposDeServicos title="Conserto geral" item1="Reparo de equipamentos" item2="Trocar peças" item3="Restaurar a estética" />
        </div>
      </div>

      <h2>QUEM SOMOS?</h2>
      <section className="quem-somos">
        <CardProfile cargo="Responsável Executivo" sourceImg={ImgDefault} nameProfile="Joel" />
        <CardProfile cargo="Reponsável Técnico" sourceImg={ImgDefault} nameProfile="Esmael" />
      </section>

      <div className="btn-container">
        <BtnAgendar />
      </div>

      <footer></footer>
    </div>
  );
}

export default App;