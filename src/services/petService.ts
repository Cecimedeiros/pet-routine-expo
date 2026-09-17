// ============================================================
// Prática 2 — Serviço mockado (arquivo 1 de 2)
// Leia o enunciado completo em `PRATICA.md` › "Prática 2".
//
// Antes de existir tela, existe a camada de dados. Aqui ela é falsa —
// mas a ASSINATURA das funções é propositalmente idêntica à que uma
// chamada HTTP real teria, para a troca do mock pela API ser indolor.
// ============================================================

import type { Pet } from '../types/pet';

// Deixe esta constante no código para conseguir testar o caminho de erro
// sem editar mais nada.
const SIMULAR_ERRO = false;

const ATRASO_MS = 1000; // para o estado de carregando ser visível

// TODO P2.1 — declare o pet mockado. Ele precisa satisfazer `Pet` inteiro;
//   não use `as` para escapar de campos faltando.
const MOCK: Pet = {
  id: 'p1',
  nome: 'paçoca',
  especie: 'cachorro',
  porte: 'pequeno',
  statusPasseio: 'concluido',
  idadeMeses: 24,
  criadoEm: 'string',
  microchip: '11112'
};

/**
 * Devolve UM pet — o do tutor logado. Assinatura propositalmente idêntica
 * à que uma chamada HTTP real teria, para a troca ser indolor.
 */
export async function buscarPetDoUsuario(): Promise<Pet> {
  // TODO P2.2 — espere ATRASO_MS antes de responder.
  //   Dica: `await new Promise((r) => setTimeout(r, ATRASO_MS));`

  // TODO P2.3 — se SIMULAR_ERRO for true, lance um Error com mensagem legível
  //   para o usuário final — não um stack trace.

  // TODO P2.4 — devolva o MOCK.
  await new Promise((r) => setTimeout(r, ATRASO_MS));

  if (SIMULAR_ERRO) {
    throw new Error('Não foi possível carregar as informações do seu pet. Tente novamente!');
  }

  return MOCK;
}

/**
 * Registra o passeio do dia. Por enquanto só devolve o pet com o
 * status atualizado; persistência é assunto de aula futura.
 */
export async function registrarPasseio(pet: Pet): Promise<Pet> {
  // TODO P2.5 — devolva uma CÓPIA do pet com statusPasseio 'concluido'.
  //   Não mute o objeto recebido.
  /* … */
  return {...pet, statusPasseio: 'concluido', };
}

// Referenciados só depois que você resolver os TODOs acima; os `void`
// evitam ruído de "declarado mas nunca usado" enquanto isso.
void SIMULAR_ERRO;
void ATRASO_MS;
void MOCK;
