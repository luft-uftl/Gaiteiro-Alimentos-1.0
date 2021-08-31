import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaiteiro Alimentos</title>
        <meta name="description" content="Desde 1987 alimentando as famílias do Rio Grande do Sul." />
        <link rel="icon" href="/logogaiteiro.ico" />
      </Head>

      <main className={styles.main}>

      <div className={styles.logo}>
        <Image
        src="/lgaiteiro.png"
        alt="Logo Oficial"
        width={120}
        height={90}
      />
        </div>

        <h1 className={styles.title}>
          <a href="https://www.instagram.com/gaiteiroalimentosrs/" target="_blank" rel="noreferrer noopener">Bem-Vindo</a>
        </h1>

        <p className={styles.description}>
          Escolha umas das opções abaixo para continuar.
        </p>

        <div className={styles.grid}>

          <a href="https://www.instagram.com/gaiteiroalimentosrs/" className={styles.card1} target="_blank" rel="noreferrer noopener"> 
            <h2>Instagram</h2>
          </a>

          <a href="https://www.facebook.com/gaiteiroalimentosrs" className={styles.card2} target="_blank" rel="noreferrer noopener">
            <h2>Facebook</h2>
          </a>

          <a href="https://api.whatsapp.com/send?phone=5551993136049&text=Ola%2C%20tudo%20bem%3F" className={styles.card3} target="_blank" rel="noreferrer noopener">
            <h2>Whatsapp</h2>
          </a>

          <a href="mailto: vendas@gaiteiroalimentos.com.br" className={styles.cardpad} target="_blank" rel="noreferrer noopener">
            <h2>E-mail</h2>
          </a>

          <a href="https://www.google.com/maps/place/Gaiteiro+Alimentos/@-29.9047733,-51.0421656,15z/data=!4m2!3m1!1s0x0:0xd2fdfe157d571e30?sa=X&ved=2ahUKEwjA4dyYntfyAhXYGrkGHfHrBBUQ_BIwG3oECF0QBQ" className={styles.cardpad} target="_blank" rel="noreferrer noopener">
            <h2>Localização</h2>
          </a>
        </div>

        <p className={styles.sg}>Site Seguro &#x1F512;</p>

      </main>

      <footer className={styles.footer}>
        <p>
        Designed in Brasil by Gabriel Luft&reg;
        All rights reserved - Impacto&copy; / Gaitero Alimentos&copy;
        </p>
      </footer>
    </div>
  )
}
