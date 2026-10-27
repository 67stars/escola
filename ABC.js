const animais = {
      bolinha: { nome: 'Bolinha', emoji: '🐶', raca: 'Vira-lata', idade: '2 anos', tamanho: 'Pequeno', especie: 'Cão', desc: 'O Bolinha é um cachorro alegre e cheio de energia! Adora correr no quintal, brincar com bola e receber carinho. É sociável com outros cães e ama crianças. Já foi vacinado, castrado e está pronto para seu novo lar.', personalidade: ['Sociável', 'Brincalhão', 'Carinhoso'], racaNome: 'Vira-lata (SRD)', racaDesc: 'Animais SRD são extremamente saudáveis e adaptáveis. São leais, carinhosos e se encaixam em diferentes estilos de vida.' },
      mimi: { nome: 'Mimi', emoji: '🐱', raca: 'Siamês', idade: '4 anos', tamanho: 'Médio', especie: 'Gato', desc: 'A Mimi é uma gata elegante e tranquila. Prefere ambientes calmos e adora se enrolar no colo de seu humano favorito. Ideal para apartamentos e pessoas que curtem um pet mais sossegado.', personalidade: ['Tranquilo', 'Carinhoso', 'Independente'], racaNome: 'Siamês', racaDesc: 'Gatos siameses são conhecidos por sua inteligência, personalidade vocal e lealdade a seus donos. São muito afetivos com a família e vivem bem em ambientes tranquilos.' },
      fred: { nome: 'Fred', emoji: '🐕', raca: 'Labrador', idade: '1 ano', tamanho: 'Grande', especie: 'Cão', desc: 'O Fred é um filhote de Labrador que não para quieto! Ama água, adora brincar de buscar objetos e tem energia de sobra. É perfeito para famílias ativas com espaço para ele correr.', personalidade: ['Brincalhão', 'Sociável', 'Energético'], racaNome: 'Labrador Retriever', racaDesc: 'Labradores são uma das raças mais populares do mundo. São dóceis, inteligentes, fáceis de treinar e excelentes com crianças. Precisam de exercício diário.' },
      bela: { nome: 'Bela', emoji: '🐈', raca: 'Persa', idade: '3 anos', tamanho: 'Pequeno', especie: 'Gato', desc: 'A Bela é uma gatinha persa de pelos longos e olhos expressivos. É calma, elegante e adora ser escovada. Gosta de janelas ensolaradas e colo aconchegante.', personalidade: ['Carinhosa', 'Tranquila', 'Elegante'], racaNome: 'Persa', racaDesc: 'Gatos persas são conhecidos pela pelagem longa e luxuosa e temperamento calmo. São muito afetivos, adaptáveis ao apartamento e adoram rotina.' },
      'totó': { nome: 'Totó', emoji: '🐩', raca: 'Poodle', idade: '5 anos', tamanho: 'Pequeno', especie: 'Cão', desc: 'O Totó é um Poodle inteligente e carinhoso. Aprende comandos rapidamente e adora agradar. É hipoalergênico, ótimo para pessoas com alergia a pelos.', personalidade: ['Inteligente', 'Carinhoso', 'Obediente'], racaNome: 'Poodle', racaDesc: 'Poodles são considerados uma das raças mais inteligentes. São ativos, elegantes e muito versáteis. Existem em vários tamanhos e têm pelo hipoalergênico.' },
      pipoca: { nome: 'Pipoca', emoji: '🐾', raca: 'SRD', idade: '6 meses', tamanho: 'Pequeno', especie: 'Gato', desc: 'A Pipoca é uma gatinha filhote cheia de energia! Pula, corre e explora tudo ao redor. Ama brinquedos com plumas e vai crescer junto com você.', personalidade: ['Brincalhão', 'Curioso', 'Ativo'], racaNome: 'SRD (Sem Raça Definida)', racaDesc: 'Gatos SRD são adaptáveis, saudáveis e cheios de personalidade única. Cada um tem suas próprias características e surpreende de formas diferentes.' },
    };

    function verAnimal(id) {
      const a = animais[id];
      if (!a) return;
      document.getElementById('pi-emoji').textContent = a.emoji;
      document.getElementById('pi-nome').textContent = a.nome;
      document.getElementById('pi-raca').textContent = a.raca;
      document.getElementById('pi-idade').textContent = a.idade;
      document.getElementById('pi-tamanho').textContent = a.tamanho;
      document.getElementById('pi-especie').textContent = a.especie;
      document.getElementById('pi-desc').textContent = a.desc;
      document.getElementById('raca-emoji').textContent = a.emoji;
      document.getElementById('raca-nome').textContent = a.racaNome;
      document.getElementById('raca-desc').textContent = a.racaDesc;
      const tags = document.getElementById('pi-personalidade');
      tags.innerHTML = a.personalidade.map(p => `<span class="tag tag-azul">${p}</span>`).join('');
      document.getElementById('lista-animais').style.display = 'none';
      document.getElementById('perfil-individual').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function voltarLista() {
      document.getElementById('lista-animais').style.display = 'block';
      document.getElementById('perfil-individual').style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function verMensagens() {
      window.location.href = 'perfil.html#mensagens';
    }