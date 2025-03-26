function funcoes() {
    return(
        <>
        <header>
        <h1>Qualidade de Vida Escolar</h1>
      </header>
  
      <main class="container">
  
        <a class="a" id="cadastro-aluno" href="./pages/cadastroAluno.html">
          <h2>Cadastro de Aluno</h2>
          <p>
            Formulário para cadastro de novos alunos no sistema do departamento.
          </p>
        </a>
  
        <a class="a" id="ocorrencias" href="./pages/ocorrencias.html">
          <h2>Ocorrências</h2>
          <p>Registro e acompanhamento de ocorrências envolvendo alunos.</p>
        </a>
  
        <a class="a" id="relatorios" href="./pages/relatorios.html">
          <h2>Relatórios</h2>
          <p>
            Visualização e geração de relatórios sobre atividades e ocorrências.
          </p>
        </a>
  
        <a class="a" id="acompanhamento" href="./pages/acompanhamento.html">
          <h2>Acompanhamento</h2>
          <p>Monitoramento do progresso e bem-estar dos alunos.</p>
        </a>
      </main>
  
      <footer>
        <p>
          &copy; 2024 Departamento de Qualidade de Vida - Todos os direitos
          reservados.
          <h2>Contato</h2>
          <p>Email: qualidadevida@senai.edu.br</p>
          <p>Telefone: (11) 1234-5678</p>
        </p>
      </footer>  
      </>
    );
}

export default funcoes;