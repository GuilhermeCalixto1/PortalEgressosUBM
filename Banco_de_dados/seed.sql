-- Dados iniciais de exemplo (branch de desenvolvimento) - Portal de Egressos FAETERJ
-- Nota: hashes de senha abaixo sao apenas ilustrativos para teste local/dev.
-- No back-end real, as senhas devem ser geradas com bcrypt ou argon2.

INSERT INTO usuarios (
  id,
  nome,
  email,
  senha_hash,
  perfil,
  ano_formatura,
  nome_curso,
  biografia,
  url_linkedin
) VALUES
  (
    '11111111-1111-4111-8111-111111111111',
    'Mariana Souza',
    'mariana.souza@exemplo.faeterj.edu.br',
    '$2b$10$exemploHashDeTesteApenasParaDesenvolvimento1',
    'egresso',
    2023,
    'Analise e Desenvolvimento de Sistemas',
    'Egressa da FAETERJ atuando como desenvolvedora backend.',
    'https://www.linkedin.com/in/mariana-souza-exemplo'
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    'Lucas Almeida',
    'lucas.almeida@exemplo.faeterj.edu.br',
    '$2b$10$exemploHashDeTesteApenasParaDesenvolvimento2',
    'aluno',
    2027,
    'Analise e Desenvolvimento de Sistemas',
    'Estudante da FAETERJ interessado em desenvolvimento web e bancos de dados.',
    'https://www.linkedin.com/in/lucas-almeida-exemplo'
  ),
  (
    '33333333-3333-4333-8333-333333333333',
    'Prof. Carlos Mendes',
    'carlos.mendes@exemplo.faeterj.edu.br',
    '$2b$10$exemploHashDeTesteApenasParaDesenvolvimento3',
    'professor',
    NULL,
    'Analise e Desenvolvimento de Sistemas',
    'Docente e orientador de projetos na FAETERJ.',
    'https://www.linkedin.com/in/carlos-mendes-exemplo'
  )
ON CONFLICT (email) DO NOTHING;

INSERT INTO cursos (
  id,
  titulo,
  descricao,
  modalidade,
  carga_horaria
) VALUES
  (
    '44444444-4444-4444-8444-444444444441',
    'Fundamentos de SQL e Modelagem Relacional',
    'Curso voltado para egressos e alunos da FAETERJ revisarem consultas, indices e modelagem em PostgreSQL.',
    'Hibrido',
    40
  ),
  (
    '44444444-4444-4444-8444-444444444442',
    'Desenvolvimento Web com TypeScript e APIs REST',
    'Capacitacao pratica em construcao de APIs, autenticacao e integracao com interfaces web.',
    'EAD',
    60
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO inscricoes_cursos (
  id,
  usuario_id,
  curso_id
) VALUES
  (
    '55555555-5555-4555-8555-555555555551',
    '22222222-2222-4222-8222-222222222222',
    '44444444-4444-4444-8444-444444444441'
  ),
  (
    '55555555-5555-4555-8555-555555555552',
    '11111111-1111-4111-8111-111111111111',
    '44444444-4444-4444-8444-444444444442'
  )
ON CONFLICT (usuario_id, curso_id) DO NOTHING;

INSERT INTO estagios (
  id,
  titulo,
  empresa,
  local_ou_modelo,
  descricao,
  requisitos,
  autor_id
) VALUES
  (
    '66666666-6666-4666-8666-666666666661',
    'Estagio em Suporte e Sistemas Web',
    'TechSul Solucoes',
    'Hibrido',
    'Apoio na manutencao de sistemas internos, atendimento a chamados tecnicos e consultas em banco de dados.',
    'Cursando graduacao em TI, logica de programacao e nocoes de SQL.',
    '33333333-3333-4333-8333-333333333333'
  ),
  (
    '66666666-6666-4666-8666-666666666662',
    'Desenvolvedor Junior / Trainee Frontend',
    'PortalConecta Digital',
    'Remoto',
    'Participacao no desenvolvimento de componentes web e integracao com endpoints REST.',
    'Conhecimento basico em HTML, CSS, JavaScript/TypeScript e Git.',
    '11111111-1111-4111-8111-111111111111'
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO topicos_forum (
  id,
  titulo,
  conteudo,
  autor_id
) VALUES
  (
    '77777777-7777-4777-8777-777777777771',
    'Dicas para o primeiro estagio na area de tecnologia',
    'Pessoal, quais habilidades praticas mais ajudaram voces a conseguirem o primeiro estagio ou vaga apos a FAETERJ?',
    '22222222-2222-4222-8222-222222222222'
  ),
  (
    '77777777-7777-4777-8777-777777777772',
    'Atualizacao profissional e cursos de extensao',
    'Compartilhando aqui como cursos curtos e projetos praticos ajudaram na transicao de carreira.',
    '11111111-1111-4111-8111-111111111111'
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO respostas_forum (
  id,
  topico_id,
  autor_id,
  conteudo
) VALUES
  (
    '88888888-8888-4888-8888-888888888881',
    '77777777-7777-4777-8777-777777777771',
    '11111111-1111-4111-8111-111111111111',
    'Ter projetos pequenos funcionando no GitHub, saber ler mensagens de erro e entender o basico de SQL fazem muita diferenca nas entrevistas.'
  ),
  (
    '88888888-8888-4888-8888-888888888882',
    '77777777-7777-4777-8777-777777777771',
    '33333333-3333-4333-8333-333333333333',
    'Aproveitem tambem os projetos extensionistas e atividades praticas para documentar o que voces construiram.'
  )
ON CONFLICT (id) DO NOTHING;