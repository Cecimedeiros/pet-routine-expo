// ============================================================
// Prática 1.1 — Modelagem do domínio Pet
// Disciplina: Desenvolvimento Mobile (2026.2.DM) — CESAR School
//
// Leia o enunciado completo em `PRATICA.md` › "Prática 1".
// Onde houver `/* … */` ou `TODO`, é a sua vez de escrever.
// Os blocos marcados como VERIFICAÇÃO **não devem ser apagados**.
//
// Regras do domínio (resumo — o enunciado manda):
//   • Um pet tem exatamente UMA espécie e exatamente UM porte.
//   • O passeio do dia tem três desfechos: pendente, concluído ou cancelado.
//   • `id`, `criadoEm` e o `statusPasseio` inicial são gerados pelo SERVIDOR —
//     o formulário de cadastro não envia nenhum dos três.
//   • A lista "Meus pets" mostra só nome, espécie e status do passeio (+ `id`).
//
// Restrições de avaliação: nenhum `any`; `as` só com justificativa em
// comentário; nenhum campo de domínio tipado como `string` genérica.
// ============================================================

// ============================================================
// TODO P1.1.1 — Union types literais. Nenhum destes pode ser `string`.
//   EspeciePet     → cachorro, gato, ave, outro
//   PortePet       → pequeno, medio, grande
//   StatusPasseio  → pendente, concluido, cancelado
// ============================================================
export type EspeciePet = /* … */ never;
export type PortePet = /* … */ never;
export type StatusPasseio = /* … */ never;

// ============================================================
// TODO P1.1.2 — A entidade completa, como ela virá do servidor um dia.
//   Campos: id, nome, especie, porte, statusPasseio, idadeMeses, criadoEm.
//   Pense no tipo de cada um. Você vai justificar uma dessas escolhas
//   na Prática 2.
// ============================================================
export interface Pet {
  /* … */
}

// ============================================================
// TODO P1.1.3 — Tipos DERIVADOS. Use utility types; não redigite campos.
//   NovoPet         → o que o formulário de cadastro envia
//   ResumoPet       → o que o card da lista "Meus pets" precisa
//   AtualizacaoPet  → edição parcial de um pet já cadastrado
//
//   Dica: os utility types desta prática são `Omit`, `Pick` e `Partial`.
//   Pergunte-se de QUEM cada um deve derivar — nem sempre é de `Pet`.
// ============================================================
export type NovoPet = /* … */ never;
export type ResumoPet = /* … */ never;
export type AtualizacaoPet = /* … */ never;

// ============================================================
// TODO P1.1.4 — Rótulos legíveis, com switch exaustivo e SEM `default`.
//   Sem `default`, o compilador avisa se um dia você acrescentar uma
//   variante ao union e esquecer de tratá-la aqui. É esse o ponto.
// ============================================================
export function rotuloStatusPasseio(status: StatusPasseio): string {
  /* … */
}

export function rotuloEspecie(especie: EspeciePet): string {
  /* … */
}

// ============================================================
// VERIFICAÇÃO — não apague
// ============================================================

// DEVEM compilar exatamente assim, sem campos a mais nem a menos:
const novo: NovoPet = {
  nome: 'Fubá',
  especie: 'gato',
  porte: 'pequeno',
  idadeMeses: 30,
};

const resumo: ResumoPet = {
  id: 'p1',
  nome: 'Fubá',
  especie: 'gato',
  statusPasseio: 'pendente',
};

const parcial: AtualizacaoPet = { idadeMeses: 31 };

// DEVEM dar erro — descomente uma de cada vez para confirmar:
// const errado1: NovoPet = { nome: 'Fubá', especie: 'gato', porte: 'pequeno', idadeMeses: 30, id: 'p1' };
// const errado2: NovoPet = { nome: 'Fubá', especie: 'peixe', porte: 'pequeno', idadeMeses: 30 };
// const errado3: ResumoPet = { id: 'p1', nome: 'Fubá', especie: 'gato' };
// const errado4: AtualizacaoPet = { statusPasseio: 'concluido' };

// Só para o `tsc` não reclamar de variáveis não usadas na verificação:
void novo;
void resumo;
void parcial;

// ============================================================
// TODO P1.1.5 — Teste final da prática (responda aqui, em comentário)
//   Acrescente o campo `microchip: string` à interface `Pet`.
//   Quantos dos três tipos derivados você precisou editar à mão?
//
//   Resposta: ...
// ============================================================
