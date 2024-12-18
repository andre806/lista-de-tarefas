import styles from './styles.module.css';
import Link from 'next/link';

export default function Home() {
    return (
      <>
        <div>
            <h1 className={styles.home}>Lista de Tarefas</h1>
            <h2 className={styles.h2}>Gerencie suas tarefas abaixo</h2>
        </div>

        <div className={styles.div2}>
          <h3>
            <Link href='/criar'>Criar novas tarefas</Link>
          </h3>
          <h4>
            <Link href='/tarefas-para-fazer'>Tarefas pra fazer</Link>
          </h4>
          <h5>
            <Link href='/tarefas-concluidas'>Tarefas concluídas</Link>
          </h5>
        </div>
      </>
    );
}
