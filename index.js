const perguntas = [
    {
        pergunta: "Qual é o conceito de 'encapsulamento' em Java?",
        respostas: [
            "A) Ocultação de implementação",
            "B) Herança múltipla",
            "C) Polimorfismo"
        ],
        correta: 0 // Resposta A) Ocultação de implementação
    },
    {
        pergunta: "Qual é a diferença entre '== e '.equals()' em Java?",
        respostas: [
            "A) Não há diferença, ambos comparam conteúdo",
            "B) '==' compara referências de objeto, '.equals()' compara conteúdo",
            "C) '==' compara conteúdo, '.equals()' compara referências de objeto"
        ],
        correta: 1 // Resposta B) '==' compara referências de objeto, '.equals()' compara conteúdo
    },
    {
        pergunta: "O que é 'polimorfismo' em Java?",
        respostas: [
            "A) Capacidade de uma classe herdar de múltiplas superclasses",
            "B) Capacidade de uma classe ter múltiplos métodos com o mesmo nome, mas comportamentos diferentes",
            "C) Capacidade de uma classe acessar métodos privados de outra classe"
        ],
        correta: 1 // Resposta B) Capacidade de uma classe ter múltiplos métodos com o mesmo nome, mas comportamentos diferentes
    },
    {
        pergunta: "Quais são os quatro princípios da Programação Orientada a Objetos (POO)?",
        respostas: [
            "A) Abstração, Encapsulamento, Herança, Polimorfismo",
            "B) Modificação, Herança, Controle, Polimorfismo",
            "C) Abstração, Herança, Modificação, Polimorfismo"
        ],
        correta: 0 // Resposta A) Abstração, Encapsulamento, Herança, Polimorfismo
    },
    {
        pergunta: "O que é uma 'classe abstrata' em Java?",
        respostas: [
            "A) Uma classe que não pode ser instanciada",
            "B) Uma classe que contém apenas métodos abstratos",
            "C) Uma classe que não pode ser estendida"
        ],
        correta: 0 // Resposta A) Uma classe que não pode ser instanciada
    },
    {
        pergunta: "Qual é o propósito da palavra-chave 'final' em Java?",
        respostas: [
            "A) Indica que uma variável não pode ser modificada",
            "B) Indica que uma classe não pode ser herdada",
            "C) Indica que um método não pode ser sobrescrito"
        ],
        correta: 1 // Resposta B) Indica que uma classe não pode ser herdada
    },
    {
        pergunta: "O que é uma 'exceção' em Java?",
        respostas: [
            "A) Um erro de compilação",
            "B) Uma condição anormal que ocorre durante a execução de um programa",
            "C) Um tipo especial de variável"
        ],
        correta: 1 // Resposta B) Uma condição anormal que ocorre durante a execução de um programa
    },
    {
        pergunta: "Qual é a diferença entre 'throw' e 'throws' em Java?",
        respostas: [
            "A) 'throw' é usado para lançar uma exceção, 'throws' é usado para declarar exceções que um método pode lançar",
            "B) 'throw' é usado para declarar exceções que um método pode lançar, 'throws' é usado para lançar uma exceção",
            "C) 'throw' e 'throws' são usados de forma intercambiável em Java"
        ],
        correta: 0 // Resposta A) 'throw' é usado para lançar uma exceção, 'throws' é usado para declarar exceções que um método pode lançar
    },
    {
        pergunta: "Qual é o significado de 'serialização' em Java?",
        respostas: [
            "A) Processo de converter um objeto em uma sequência de bytes",
            "B) Processo de criptografar um objeto",
            "C) Processo de ocultar um objeto"
        ],
        correta: 0 // Resposta A) Processo de converter um objeto em uma sequência de bytes
    },
    {
        pergunta: "O que é 'sobrecarga de método' em Java?",
        respostas: [
            "A) Ter vários métodos com o mesmo nome, mas com parâmetros diferentes",
            "B) Ter vários métodos com o mesmo nome e os mesmos parâmetros",
            "C) Ter apenas um método em uma classe"
        ],
        correta: 0 // Resposta A) Ter vários métodos com o mesmo nome, mas com parâmetros diferentes
    }
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }