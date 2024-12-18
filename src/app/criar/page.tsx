'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';  // Importando as classes CSS

export default function AdicionarTarefa() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
  const [novaTarefa, setNovaTarefa] = useState("");
  const router = useRouter();

  const add = () => {
    if (tarefa.trim() === "") {
      alert("Digite uma tarefa válida");
      return;
    }
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (editandoIndex !== null) {
        salvarEdicao(editandoIndex); 
      } else {
        add();
      }
    }
  };

  const remove = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const iniciarEdicao = (index: number) => {
    setEditandoIndex(index);
    setNovaTarefa(tarefas[index]);
  };

  const salvarEdicao = (index: number) => {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa válida");
      return;
    }
    const novasTarefas = [...tarefas];
    novasTarefas[index] = novaTarefa;
    setTarefas(novasTarefas);
    setEditandoIndex(null);
    setNovaTarefa("");
  };

  const enviarParaFazer = (index: number) => {
    const tarefaEnviada = tarefas[index];
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefasParaFazer') || '[]');
    tarefasExistentes.push(tarefaEnviada);
    localStorage.setItem('tarefasParaFazer', JSON.stringify(tarefasExistentes));
    setTarefas(tarefas.filter((_, i) => i !== index)); // Remove a tarefa da lista
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.home}>Adicione novas tarefas</h1>
      <input
        className={styles.input}
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        onKeyDown={handleKeyPress} 
        placeholder="Digite aqui sua tarefa"
      />
      <button onClick={add} className={styles.button}>Adicionar</button>

      <h2>Tarefas:</h2>
      <ul className={styles.listaTarefas}>
        {tarefas.map((item, index) => (
          <li key={index} className={styles.itemTarefa}>
            {editandoIndex === index ? (
              <>
                <input
                  type="text"
                  value={novaTarefa}
                  onChange={(e) => setNovaTarefa(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") salvarEdicao(index); 
                  }}
                  className={styles.input}
                />
                <button onClick={() => setEditandoIndex(null)} className={styles.cancelar}>Cancelar</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => iniciarEdicao(index)}
                  className={styles.tarefaSpan}
                >
                  {item}
                </span>
                <button onClick={() => remove(index)} className={`${styles.button} ${styles.remove}`}>
                  Remover
                </button>
                <button onClick={() => enviarParaFazer(index)} className={`${styles.button} ${styles.enviar}`}>
                  Enviar para Tarefas para Fazer
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
