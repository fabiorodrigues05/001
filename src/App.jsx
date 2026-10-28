import './App.css';
import InfoPerso from './InfoPerso';
import Experiences from './Experiences';
import Competences from './Competences';

function App(){
  return (
    <div>
      <h1>Mon Curriculm Vitae</h1>
      <InfoPerso/>
      <Experiences/>
      <Competences/>
    </div>
    );
  }
  export default App;
  //npm create: executa uma ferramenta de criação de projeto.
  //vite@latest: utiliza a versão mais recente disponível do Vite.
  //001: define o nome do projeto.
  //-- --template react: indica que queremos criar um projeto com o modelo React.
