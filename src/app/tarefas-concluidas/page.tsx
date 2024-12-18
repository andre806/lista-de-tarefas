'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Importando o CSS

export default function TarefasConcluidas() {
  const [tarefasConcluidas, setTarefasConcluidas] = useState<string[]>([]);

  useEffect(() => {
    // Carregar tarefas concluídas do localStorage
    const tarefas = localStorage.getItem('tarefasConcluidas');
    if (tarefas) {
      setTarefasConcluidas(JSON.parse(tarefas));
    }
  }, []);

  const removerTarefa = (index: number) => {
    const novasTarefas = tarefasConcluidas.filter((_, i) => i !== index);
    setTarefasConcluidas(novasTarefas);
    localStorage.setItem('tarefasConcluidas', JSON.stringify(novasTarefas)); // Atualizar no localStorage
  };

  const limparTarefas = () => {
    setTarefasConcluidas([]);
    localStorage.removeItem('tarefasConcluidas'); // Limpar as tarefas no localStorage
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.home}>Tarefas Concluídas</h1>
      <h2 className={styles.h2}>Aqui estão suas tarefas concluídas!</h2>

      {tarefasConcluidas.length === 0 ? (
        <p className={styles.emptyMessage}>Você não tem tarefas concluídas.</p>
      ) : (
        <ul className={styles.listaTarefas}>
          {tarefasConcluidas.map((tarefa, index) => (
            <li key={index} className={styles.itemTarefa}>
              <span className={styles.tarefaSpan}>{tarefa}</span>
              <button
                className={`${styles.button} ${styles.remove}`}
                onClick={() => removerTarefa(index)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {tarefasConcluidas.length > 0 && (
        <button className={`${styles.button} ${styles.clearButton}`} onClick={limparTarefas}>
          Limpar Tarefas Concluídas
        </button>
      )}
    </div>
  );
}
