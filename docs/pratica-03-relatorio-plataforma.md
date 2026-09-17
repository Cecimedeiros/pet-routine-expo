<!--
  Prática 3 — Relatório de decisão de plataforma
  Nível ⭐⭐ · ~1 h · Entrega individual · 1 a 2 páginas
  Enunciado completo (contexto e restrições do cliente): `PRATICA.md` › "Prática 3".

  TODO P3 — preencha TODAS as lacunas abaixo. A estrutura é fixa; o conteúdo é seu.
  Não existe uma resposta única correta — o que é avaliado é a qualidade do raciocínio.
-->

# Relatório de decisão de plataforma — App de Rotina Pet

**Autor:** Cecília Medeiros   **Data:** 16/09/2026

## 1. Recomendação

<!-- TODO P3.1 — escolha UMA abordagem e diga qual. Sem "depende". -->

Para o app do tutor, recomendo a abordagem **cross-plataform**
(nativo | cross-platform | web/PWA).

## 2. Restrições que sustentam a escolha

<!-- TODO P3.2 — cite TRÊS restrições do enunciado, TEXTUALMENTE.
     Não argumente em abstrato ("cross-platform é mais rápido de desenvolver"
     não é uma restrição do enunciado; "2 devs, nenhum com Kotlin ou Swift" é). -->

| # | Restrição do enunciado                 |                  Como ela empurra para a minha escolha                          |
|---|----------------------------------------|---------------------------------------------------------------------------------|
| 1 | Há apenas 2 desenvolvedores (ambos     | Como o time já domina React e TS, usar cross-platform (com React Native)        |  
|   | com TypeScript e React, nenhum com     | evita ter que contratar ou aprender linguagens nativas do zero                  |
|   | Kotlin ou Swift)                       |                                                                                 |
--------------------------------------------------------------------------------------------------------------------------------
| 2 | O prazo é curto (3 meses até o         | Desenvolver uma única base de código para Android e iOS reduz o tempo de        |
|   | piloto e orçamento de R$ 90 mil)       | desenvolvimento pela metade, viabilizando o piloto dentro do prazo e orçamento. |
--------------------------------------------------------------------------------------------------------------------------------
| 3 | Requisitos funcionais como tirar foto, | Uma Web/PWA teria limitações graves de acesso a GPS em background, notificações |
|   | capturar GPS no passeio, funcionar     | push e armazenamento offline continuo no iOS, tornando o app cross-platform     |
|   | offline e notificar tutor              | nativo a opção viável.                                                          |


## 3. O que estamos perdendo

<!-- TODO P3.3 — toda decisão tem custo. Uma resposta que não nomeia
     nenhum custo está escondendo o custo, não eliminando-o. -->

Abordagem rejeitada: Nativo e Web/PWA

O que a organização deixa de ganhar ao não escolhê-la:
R: Ao rejeitar o nativo, perde-se o desempenho máximo e o acesso direto ao hardware (como GPS). Ao rejeitar a Web/PWA, perde-se a atualização instantânea sem fila de aprovação das lojas (App Store/Play Store) e o acesso por link sem precisar baixar nada.

## 4. O painel das clínicas

<!-- TODO P3.4 — lembre que o painel é usado em desktop, na recepção. -->

Mesma tecnologia do app do tutor?  ( ) sim   (x) não

Justificativa: Para a recepção, recomendo a abordagem web/PWA, visto que, como os computadores usam navegador e não precisam de sensores móveis (como GPS), a solução Web/PWA reduz custos, dispensa instalação no computador da clínica e utiliza diretamente o conhecimento da equipe em React e TypeScript.

## 5. Risco técnico e mitigação

<!-- TODO P3.5 — risco CONCRETO e específico deste projeto
     (pense em: Android de entrada com <4 GB de RAM, GPS em background,
     sincronização offline, notificações). Nada de "pode dar atraso". -->


|----------------------------------|------------------------------------------------------------------------------------------------------|
| **Risco concreto**               | O app ser fechado sozinho pelo sistema (Android) no meio do passeio, fazendo o tutor perder o        |
|                                  | histórico do mapa.                                                                                   |
-------------------------------------------------------------------------------------------------------------------------------------------
| **Por que ele é plausível aqui** | 65% dos aparelhos do público-alvo são Android de entrada com menos de 4 GB de RAM (Para não travar   |
|                                  | tudo, o Android fecha automaticamente os apps que ficam rodando escondidos no fundo (background)     |
|                                  | coletando GPS.)                                                                                      |
-------------------------------------------------------------------------------------------------------------------------------------------
| **Como eu mitigaria**            | Usar notificação fixa na tela ("Acompanhando passeio...") para o Android entender que o app é        |
|                                  | prioritário e não deve ser fechado, além de salvar os pontos do GPS direto no banco do celular para  |
|                                  | não gastar memória enviando dados toda hora.                                                         | 

## 6. A pergunta que eu faria ao cliente

<!-- TODO P3.6 — uma pergunta que REALMENTE mudaria a decisão.
     Se a resposta do cliente não altera nada, a pergunta não vale nota. -->

Algo que o enunciado NÃO informa e que poderia mudar minha resposta:

Qual é a margem de orçamento e prazo disponível caso o app precise passar por aprovações mais robustas nas lojas de aplicativos antes do piloto

Se a resposta fosse "sem margem", eu mudaria minha recomendação para
web/pwa, porque não precisaria de aprovação nas lojas de aplicativos.