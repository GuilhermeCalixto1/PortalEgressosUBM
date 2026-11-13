Portal de Egressos UBM 🎓

Bem-vindo ao repositório do Portal de Egressos UBM. Esta é uma aplicação web desenvolvida para conectar, informar e engajar os ex-alunos (egressos) da instituição, oferecendo recursos como oportunidades de estágio, fórum de discussões e informações sobre cursos.

🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando um ecossistema moderno de desenvolvimento front-end:

React: Biblioteca JavaScript para construção da interface de usuário.

TypeScript: Superconjunto de JavaScript que adiciona tipagem estática.

Vite: Ferramenta de build extremamente rápida para projetos web modernos.

pnpm: Gerenciador de pacotes rápido e eficiente (indicado pelo arquivo pnpm-lock.yaml).

📂 Estrutura do Projeto

A estrutura principal do código-fonte (localizada na pasta src/) está organizada da seguinte maneira:

src/components/: Componentes reutilizáveis da interface.

NavBar.tsx: Barra de navegação principal.

Shell.tsx: Estrutura de layout base (App Shell).

src/pages/: Páginas (rotas) principais da aplicação.

HomePage.tsx: Página inicial do portal.

LoginPage.tsx: Tela de autenticação para usuários.

CursosPage.tsx: Área dedicada a informações sobre os cursos.

EstagiosPage.tsx: Mural de oportunidades e estágios.

ForumPage.tsx: Espaço de comunidade e discussões para os egressos.

src/imports/: Arquivos estáticos e documentos importados (ex: PDFs de protótipos).

🚀 Como executar o projeto localmente

Pré-requisitos

Certifique-se de ter o Node.js e o pnpm instalados em sua máquina.

Passos de Instalação

Clone o repositório:

git clone <url-do-repositorio>
cd PortalEgressosUBM


Instale as dependências do projeto usando pnpm:

pnpm install


Inicie o servidor de desenvolvimento:

pnpm run dev


Abra o navegador e acesse a URL fornecida no terminal (geralmente http://localhost:5173).

📦 Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos através do pnpm:

pnpm run dev: Executa a aplicação em modo de desenvolvimento.

pnpm run build: Compila a aplicação para produção, gerando os arquivos otimizados na pasta dist/.

pnpm run preview: Inicia um servidor local para visualizar a versão de produção gerada após o build.

📄 Licença

Este projeto é de uso exclusivo da UBM.
