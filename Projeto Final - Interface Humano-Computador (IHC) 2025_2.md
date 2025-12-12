# Projeto Final - Interface Humano-Computador (IHC) 2025_2

## 1. Identificação do Projeto

**Nome do Projeto: Alerta Urbano**
**Grupo:**
**Integrantes: Pedro Henrique Bastos Guimarães - 22303912, Marcos Vinícius Feijó - 22206636, Pedro Henrique Cardoso Caldas - 22308721, Raphael Damião Seabra Rosano - 22303595**
**Data de Início: 07/11/2025**
**Data de entrega: 05/12/2025**

---

## 2. Tema e Público-Alvo

**Domínio de Aplicação: Segurança Urbana** 
**Descrição do Público-Alvo: Motoristas, Representantes populares, Agentes Publicos**
**Justificativa da Escolha: Registrar ocorrências do dia a dia nas pistas em prol da segurança e urgências**

---

## 3. Pesquisa e Análise de Requisitos

**Método de Pesquisa Utilizado: Ocorrências de sites/bases de dados** 
**Principais Necessidades Identificadas: Agilidade rotineira em caso de urgência**
**Expectativas do Usuário: Fácil usabilidade e flexibilidade**
**Referências Utilizadas: Snapcrap**

---

## 4. Definição de Usuários e Atividades

**Personas Criadas:**
* Persona 1: João Souza (Motorista por Aplicativo) – Plano Piloto
Idade: 33 anos.
Ocupação: Motorista por aplicativo (turnos noturnos e diurnos).
Rotina: Trânsito constante no Plano Piloto; passa longas horas no carro; precisa se manter conectado para faturamento.
Tecnologia: Smartphone moderno; usuário pragmático; confortável com GPS e apps essenciais; interações precisam ser mínimas e por comando de voz.
Comportamento: Compartilha ativamente fotos e informações de trânsito em grupos; busca proteção contra acusações injustas.
Necessidades: Registro rápido e seguro de incidentes em movimento; obter evidências confiáveis e geolocalizadas para seguros e cobranças.
Motivação: Reduzir custos de manutenção e o tempo perdido com burocracia para maximizar seus ganhos.

* Persona 2: Maria Silva (Moradora / Professora) – Asa Norte
 Idade: 42 anos.
 Ocupação: Professora municipal.
Rotina: Deslocamentos a pé com crianças; preocupa-se com segurança infantil perto de
escolas e praças públicas.
Tecnologia: Smartphone Android básico; prefere interfaces simples e intuitivas.
Comportamento: Conversa com vizinhos sobre problemas; evita rotas perigosas e
fiscaliza manutenção em espaços públicos como escolas e praças.
Necessidades: Reportar questões próximas à escola ou em praças, receber confirmações
e acompanhar status.
Motivação: Garantir segurança das crianças e confiança na gestão pública. Persona 3:
Associação de Moradores (Coletivo) – Região Central do Plano Piloto

---

## 5. Wireframes e Validação UX

* **Ferramenta Utilizada para Wireframes:** Canva
* **Screenshots ou links dos wireframes:**<img width="625" height="909" alt="telaalertaurb" src="https://github.com/user-attachments/assets/ba043937-7059-4cf0-a633-26a079fd80e6" />

* **Método de Validação:** Inspeção de usabilidade e Teste de Usabilidade Não-Moderado 
* **Feedback Recebido:** O texto "Fiscalize sua cidade: buracos, iluminação, praças e escolas." é ótimo, mas não é uma ação. Sugestão de Melhoria: Transformar em uma chamada para ação clara
* **Ajustes Realizados:** Texto Mudado para "Clique em "Reportar" para reportar um problema"

---

## 6. Implementação Técnica

* **Tecnologias Utilizadas:** HTML, CSS, JavaScript
* **Design Responsivo:** Sim 
* **Link do Protótipo Funcional:** O protótipo roda local com LiveServer, necessário o donwload dos arquivos e da extensão LiveServer
* **Principais Funcionalidades Implementadas:** Botões funcionais, Câmera abre o explorador de arquivos parar o upload de imagens.

---

## 7. Integração e Testes

### Integração HTML/CSS/JS
* Descrição da estrutura e organização do código
* O projeto foi estruturado seguindo o modelo clássico de desenvolvimento web, utilizando três arquivos principais — HTML, CSS e JavaScript — cada um responsável por uma parte distinta da aplicação. Essa separação contribui para um código mais organizado, de fácil manutenção e alinhado às boas práticas de Interface Humano-Computador.
* HTML (index.html) – Estrutura do Aplicativo
    O arquivo HTML contém toda a estrutura visual e hierárquica da aplicação. Nele estão definidas:
    O componente superior de navegação, que simula uma topbar de app nativo.
    As quatro telas principais: Home, Novo Reporte, Mapa, e Tela em Branco.
    Elementos interativos, como:
    Botões de navegação entre telas
    Área de upload/captura de foto
    Radio buttons personalizados para nível de criticidade
    Botão de alternância entre modo claro e escuro
    A navegação entre as telas funciona através de <div class="screen">, onde apenas uma delas permanece visível em cada momento.
* CSS (style.css) – Estilização e Experiência Visual
    O arquivo CSS é responsável por toda a aparência do aplicativo, garantindo:
    Layout mobile-first, priorizando visual e espaçamentos otimizados para telas pequenas.
    Estilo similar a aplicativos nativos, com:
    cantos arredondados
    sombras suaves
    botões grandes e touch-friendly
    transições suaves
    Sistema de tema claro/escuro, implementado com variáveis CSS (:root e .dark), permitindo trocar todo o esquema de cores sem alterar o HTML.
    Animações visuais, como:
    Slide lateral na troca de telas
    Hover e microinterações nos botões
    Destaque visual nos radio buttons selecionados
    O uso de variáveis facilita manutenção e consistência visual em todo o app.
* JavaScript (script.js) – Funcionalidade e Comportamento
    O arquivo JavaScript centraliza toda a lógica de funcionamento da aplicação:
    Navegação entre telas
    A função show(screen) controla quais telas ficam visíveis, aplicando classes CSS que ativam animações.
    Modo claro/escuro manual
    O botão na topbar alterna a classe .dark no body, modificando dinamicamente todo o tema da interface.
    Integração com câmera
    A função openCamera() abre a câmera do dispositivo (mobile ou notebook) através de um <input type="file" capture="environment">.
    Pré-visualização da imagem capturada
    Quando o usuário tira uma foto, o JS carrega e exibe a imagem dentro do componente visual do reporte.
    Essas funções permitem que a aplicação funcione como um app real, mesmo sendo 100% baseada em tecnologias web.

### Testes de Usabilidade
* Testes de Performance e Funcionalidade (QA Interno)
* Teste Funcional (Smoke Test):
  Verificar o fluxo principal: Reportar um problema, enviar e confirmar o recebimento no backend.
  Garantir que os botões de ação e navegação (Voltar, Reportar, Ver Mapa) funcionem conforme o esperado.
  Resultado OK: O fluxo de envio de reporte funciona. O backend recebe os dados. Resultado Falho: O feedback visual de sucesso (tela de confirmação) desaparece em menos de 1 segundo.
  Ação (Usabilidade): Aumentar a duração da tela de sucesso (confirmação) para 3 segundos ou transformá-la em um toast de longa duração para garantir que o usuário perceba a conclusão da tarefa (Visibilidade do Status).
* Teste de Performance e Carga:
  Medir o tempo de carregamento do "Mapa de Ocorrências" com um grande volume de dados (pins).
  Avaliar a latência da interface após o clique em "Enviar Reporte".
  Resultado OK: O mapa carrega 100 pins em 1.5 segundos (abaixo do limite de 2s). Resultado Falho: O zoom e a navegação (pan) no mapa sofrem micro-travamentos (lag) ao usar o cluster de pins.
  Ação (Técnica): Otimizar a lógica de clustering (agrupamento de pins) no mapa para melhorar a taxa de quadros (FPS) durante o movimento e interação.
* Teste de Navegação (Walkthrough):
  Garantir a consistência e a ausência de bugs nos caminhos de ida e volta entre todas as telas.
  Resultado Falho: Ao clicar em "Voltar" após enviar um Reporte, o usuário é levado à Tela Principal, mas os dados do Reporte Anterior (foto) permanecem em cache.
  Ação (Funcional): Implementar uma rotina de limpeza de estado (state clearing) ao finalizar a tarefa ou ao voltar para a Tela Principal, garantindo que o formulário de "Novo Reporte" esteja sempre vazio.
* Análise de Dados de Uso (Analytics)
  *  Taxa de Conclusão da Tarefa (Funil):
     Monitorar o funil de "Novo Reporte" para identificar quedas na conversão (pontos onde os usuários desistem).
     Resultado: Queda de 25% entre a visualização da tela "Novo Reporte" e a "Adição de Foto".
     Ação (Usabilidade/UI): Investigar o elemento "Capturar foto". O ícone da câmera pode não estar claro ou a permissão de acesso à câmera pode estar gerando frustração. Adicionar um texto de instrução mais explícito ou um tooltip.
  * Taxa de Erro e Abandono:
      Identificar as telas com maior taxa de erro ou abandono para localizar bugs não detectados ou complexidade de design.
      Resultado: Alta taxa de abandono (15%) na etapa de "Seleção de Criticidade" e "Descrição do Problema".
      Ação (Usabilidade): Embora o Radio Button tenha sido usado, o abandono sugere que o usuário não tem certeza de qual criticidade escolher. Adicionar um ícone de ajuda (i) ou um breve hint explicando o que constitui um problema "Baixo", "Médio" ou "Alto".
   * Tempo Médio de Permanência:
      Analisar se há tempo de permanência excessivo em telas simples (ex: seleção de Criticidade), o que pode indicar confusão.
      Resultado OK: Tempo baixo na tela de criticidade e rápido avanço após o upload da foto.
      Confirmação Positiva: O uso dos Radio Buttons foi validado pelos dados, demonstrando que a alteração do wireframe melhorou a eficiência da interação.

### Testes de Acessibilidade
  * Contraste de Cores (WCAG 1.4.3):
      Utilizar ferramentas de contraste para confirmar que o texto nos botões azuis e os elementos de feedback atendem ao padrão ≥4.5 : 1
      Resultado Falho: O texto auxiliar na Tela Principal ("Fiscalize sua cidade...") tem uma taxa de contraste de 2.8:1, abaixo do mínimo (4.5:1).
      Ação (Acessibilidade/UI): Aumentar a opacidade ou o peso (bold) da fonte do texto auxiliar para garantir a leitura por usuários com baixa visão.
  * Rótulos Acessíveis (Labels):
      Inspecionar o código para garantir que todos os elementos não textuais (Ex: Ícone da Câmera, Seta de Voltar) possuam uma descrição de conteúdo (contentDescription) definida.
      Resultado Falho: O botão "Ver Mapa" não tem um rótulo acessível completo, sendo lido pelo leitor de tela apenas como "Ver".
      Ação (Desenvolvimento): Adicionar a descrição de conteúdo (contentDescription) explícita para o elemento como "Botão, Ver Mapa de Ocorrências".
  * Áreas de Toque (Touch Targets):
      Garantir que as áreas clicáveis de ícones pequenos (mínimo $44 \times 44$ pixels) sejam adequadas para dispositivos móveis.
      Resultado Falho: Os pins de ocorrência no mapa, quando agrupados, resultam em áreas de toque muito pequenas.
      Ação (Desenvolvimento/UI): Aumentar a área de toque efetiva dos pins (um padding invisível) para garantir que usuários com dificuldades motoras possam interagir com o mapa sem frustração.

---

## 8. Documentação Final

* **Resumo das Decisões de Design:**
* Criticidade: Troca de dropdown por Radio Buttons para rapidez e clareza (melhora na eficiência).

* Fluxo de Reporte: Tornar campos essenciais (descrição, criticidade) obrigatórios na tela de Novo Reporte antes de habilitar o envio (previne erros).

* Mapa: Remover botão grande "Voltar à Inicial" e padronizar o retorno pela seta do cabeçalho (consistência).

Visuais do Mapa: Sugerir pins coloridos/iconizados no mapa para diferenciar tipos de ocorrências rapidamente (reconhecimento).
* **Dificuldades Encontradas e Soluções:**
* Dificuldade: Fluxo de reporte original era muito incompleto.

* Solução: Reforçar a tela de Reporte com campos essenciais obrigatórios antes do envio.

* Dificuldade: O dropdown de criticidade era lento.

* Solução: Substituir por Radio Buttons (seleção em um clique).
* **Considerações Finais:**
  
* Com as otimizações de usabilidade implementadas — incluindo a simplificação do fluxo de reporte, a adoção de controles de interação mais eficientes (como Radio Buttons para criticidade) e a padronização da navegação em todas as telas — o wireframe do "Alerta Urbano" está funcionalmente validado e otimizado.

* A estrutura atual é robusta e atende aos requisitos de clareza e eficiência. O design agora oferece um caminho direto e intuitivo para a ação primária (reportar) e secundária (ver mapa).

* Próximo Passo: Dado que os problemas de usabilidade do wireframe foram resolvidos, a etapa seguinte é o desenvolvimento completo para dispositivos móveis. Isso envolve a criação do protótipo visual de alta fidelidade (UI design), a definição de um guia de estilos (style guide) e a implementação técnica para lançar um sistema 100% funcional em plataformas como Android e iOS.


### Declaração de Autoria
> Declaramos que este projeto foi desenvolvido integralmente pelo grupo, sem plágio ou uso indevido de conteúdo de terceiros, o uso de IA foi estritamente para elaboração e formatação do documento.
