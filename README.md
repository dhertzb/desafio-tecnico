# ZenklubChallenge

- npm install
- npm run fake-server
- npm run start
- navegar para /localhost:port/specialists/search

---

Tentei dar uma organizada no projeto com base na página https://zenklub.com.br/busca (Só pra usar de exemplo, já que pra um site eu não vejo tanto sentido em seguir essa abordagem), e principios básicos do DDD

Em domains temos divido por pastas os subdominios do negócio, dentro de cada pasta coloquei

- components -- componentes relacionado ao subdomino
- models -- tipos relacionado ao subdomino
- pages -- páginas do subdomino
- services -- serviços relacionado ao subdomino
- state -- estados relacionado ao subdomino

Em shared temos os componentes/serviços/estilos/estado compartilhados por toda a aplicação independente do subdominio. Por exemplo o serviço de datas.



Aqui um exemplo de como eu abstrairia a página de busca, componentizando de acordo com suas responsabilidades. Dentro do componente Scheduler tem o date-roller e o time-picker, quando o usuário rola a fileira de datas é emitido um evento com o array de datas como output. A partir dai o dev pode usar esse array localmente ( como eu usei no scheduler ) para buscar os horários disponiveis ou poderia emitir uma action e salvar as datas na store e passar para todas instancias do time-picker pra que todos ficarem sincronizados na página como eu percebi que acontece na página de busca atualmente.

Infelizmente não tive tempo pra desenvolver os testes, mas achei bem parecido a api do karma com o jest então acho que no futuro vou me familiarizar tranquilo


<div style="display: flex;">
  <div>
    <img src="./page.png">
  </div>
    <div>
  </div>
</div>

```
<page>
   <header class="specialists-page__header">
    <navbar></navbar>
    <div>
      <h1>Encontre seu especialista</h1>
      <h2></h2>
      <search-bar></search-bar>
    </div>
  </header>
  <filter fixed-on-scroll="true"></filter>
  <section class="specialists__section--main">
    <card class="py-2 specialists__card" *ngFor="let specialist of specialists">
      <div class="card__body">
        <specialist-info [specialist]="specialist"></specialist-info>
        <scheduler></scheduler>
      </div>
    </card>
  </section>
</page>

```


