-- Extensao para geracao de UUID (padrao do PostgreSQL com pgcrypto)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Egressos, alunos e professores do portal
CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(180) NOT NULL UNIQUE,
  senha_hash TEXT NOT NULL,
  perfil VARCHAR(30) NOT NULL DEFAULT 'egresso'
    CONSTRAINT chk_perfil_usuario CHECK (perfil IN ('egresso', 'aluno', 'professor')),
  ano_formatura SMALLINT,
  nome_curso VARCHAR(120),
  biografia TEXT,
  url_linkedin TEXT,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Cursos oferecidos
CREATE TABLE cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(180) NOT NULL,
  descricao TEXT NOT NULL,
  modalidade VARCHAR(50), -- ex.: 'Presencial', 'EAD', 'Hibrido'
  carga_horaria INTEGER,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Inscricoes ou interesse de usuarios em cursos
CREATE TABLE inscricoes_cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  curso_id UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_usuario_curso UNIQUE (usuario_id, curso_id)
);

-- 4. Estagios e vagas divulgadas
CREATE TABLE estagios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(180) NOT NULL,
  empresa VARCHAR(150) NOT NULL,
  local_ou_modelo VARCHAR(120), -- ex.: 'Remoto', 'Presencial', 'Hibrido'
  descricao TEXT NOT NULL,
  requisitos TEXT,
  autor_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Forum: topicos de discussao
CREATE TABLE topicos_forum (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(200) NOT NULL,
  conteudo TEXT NOT NULL,
  autor_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Forum: respostas aos topicos
CREATE TABLE respostas_forum (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topico_id UUID NOT NULL REFERENCES topicos_forum(id) ON DELETE CASCADE,
  autor_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  conteudo TEXT NOT NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indices para acelerar listagens e consultas por chave estrangeira
CREATE INDEX idx_estagios_criado_em ON estagios(criado_em DESC);
CREATE INDEX idx_topicos_forum_criado_em ON topicos_forum(criado_em DESC);
CREATE INDEX idx_respostas_forum_topico_id ON respostas_forum(topico_id, criado_em ASC);
CREATE INDEX idx_inscricoes_cursos_usuario_id ON inscricoes_cursos(usuario_id);