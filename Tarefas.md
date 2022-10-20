# Tarefas

- Separar componentes em pastas próprias, retornando apenas o default (e não permitindo que nenhum recurso interno do componente seja utilizado externamente);
- Verificar se lógica de componente pai está sendo passada para os componentes filhos (apenas valores e event handlers devem ser passados);
- Verificar se há lógica não trivial ou repetitiva *(ex: useInfiniteScroll)* que pode ser abstraída para o seu próprio componente ou hook;
- Refatorar todas chamadas GET para **queries** *(ex: usePhotosQuery)*.

As chamadas POST, transformaremos em **mutations** logo em seguida. Leia sobre [React Query](https://tanstack.com/query/v4/docs/overview).