## Advice from the universe
Este é um projeto simples desenvolvido com Next.js que fornece um site minimalista para obter conselhos diários aleatórios. O usuário clica em um único botão para fazer uma requisição à API Advice Slip, que retorna uma frase de conselho inspiradora. A frase é exibida na tela e salva no localStorage do navegador usando o hook useEffect. Essa persistência garante que o conselho permaneça salvo por exatamente 24 horas, limitando o usuário a um novo conselho por dia. Isso promove o uso consciente e evita repetições desnecessárias.
O projeto é responsivo, leve e não requer autenticação ou configurações complexas. É ideal para quem busca motivação diária de forma simples e offline (após o primeiro carregamento).

## Funcionalidades

- Botão único para fetch: Clique para buscar um conselho aleatório da API.
- Exibição do conselho: A frase aparece imediatamente após a requisição.
- Persistência diária: Usa localStorage para armazenar o conselho e a data de salvamento. Novos conselhos só são gerados após 24 horas.
- Cache da API: A API já implementa um cache de 2 segundos para evitar repetições imediatas.
- Interface minimalista: Design clean, focado na usabilidade.

## Tecnologias Utilizadas
- Next.js: Framework React para desenvolvimento web com renderização server-side e suporte a hooks.
- React Hooks: useState para gerenciar o estado da frase e useEffect para persistência no localStorage.
- API Advice Slip: Fonte de dados gratuita para conselhos aleatórios (documentação: https://api.adviceslip.com/).
- localStorage: Armazenamento local do navegador para persistir dados por 24 horas.
  
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/8d1484ad-ecfb-4f00-add7-7db4c5deffa2" />
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/51d3e43f-f1e1-4902-a259-f17d5f4e079e" />
