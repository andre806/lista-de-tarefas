'use client'; // Adicionando a diretiva para indicar que é um componente cliente

import { useEffect, useState } from 'react';
import styles from './styles.module.css'; // Importando o CSS

export default function TarefasParaFazer() {
  const [tarefasParaFazer, setTarefasParaFazer] = useState<string[]>([]);

  useEffect(() => {
    // Recupera as tarefas do localStorage ao carregar a página
    const tarefas = localStorage.getItem('tarefasParaFazer');
    if (tarefas) {
      setTarefasParaFazer(JSON.parse(tarefas));
    }
  }, []);

  // Função para concluir a tarefa
  const concluirTarefa = (index: number) => {
    const tarefaConcluida = tarefasParaFazer[index];
    // Atualiza a lista de tarefas concluídas no localStorage
    let tarefasConcluidas = JSON.parse(localStorage.getItem('tarefasConcluidas') || '[]');
    tarefasConcluidas.push(tarefaConcluida);
    localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas));

    // Remove a tarefa da lista de tarefas para fazer
    const novasTarefas = tarefasParaFazer.filter((_, i) => i !== index);
    setTarefasParaFazer(novasTarefas);
    localStorage.setItem('tarefasParaFazer', JSON.stringify(novasTarefas)); // Atualiza o localStorage
  };

  // Função para excluir a tarefa
  const excluirTarefa = (index: number) => {
    const novasTarefas = tarefasParaFazer.filter((_, i) => i !== index);
    setTarefasParaFazer(novasTarefas);
    localStorage.setItem('tarefasParaFazer', JSON.stringify(novasTarefas)); // Atualiza o localStorage
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Tarefas para Fazer</h1>
      <div className={styles.listaTarefas}>
        {tarefasParaFazer.length === 0 ? (
          <p>Não há tarefas para fazer.</p>
        ) : (
          <ul>
            {tarefasParaFazer.map((tarefa, index) => (
              <li key={index}>
                <span>{tarefa}</span>
                <div>
                  <button className={styles.button} onClick={() => concluirTarefa(index)}>
                    Concluir
                  </button>
                  <button className={`${styles.button} ${styles.cancelar}`} onClick={() => excluirTarefa(index)}>
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
