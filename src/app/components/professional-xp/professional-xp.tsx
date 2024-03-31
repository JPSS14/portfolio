import Image from "next/image";
import styles from "./professional-xp.module.scss";

export const ProfessionalXP = () => {
  return (
    <section className={styles.professionalxp__container}>
      <header className={styles.container__header}>
        <h1>Experiência Profissional</h1>
      </header>
      <article className={styles.professionalxp__article}>
        <div className={styles.article__logo__container}>
          <Image
            src={"/riachuelo_logo.png"}
            width={1142}
            height={180}
            alt="Riachuelo Logo"
            className={styles.article__logo}
          />
        </div>
        <div className={styles.professionalxp__article__content}>
          <p>
            <strong>Função</strong>: Front-End
          </p>
          <p>
            <strong>Duração</strong>: Jun/2021 - Jan/2023
          </p>
          <div className={styles.article__content__description}>
            <p>
              <strong>Descrição</strong>
            </p>
            <p>
              Participei da construção de um portal que possuía 4 módulos
              diferentes, tive participação desde o primeiro módulo do portal.
            </p>
            <p>
              Desenvolvi componentes comuns aos módulos ou específicos, fiz
              integrações com serviços de back-end, e escrevi testes unitários
              para os mesmos.
            </p>
          </div>
        </div>
        <div className={styles.professionalxp__article__footer}>
          <Image
            src={"./react_logo-2.svg"}
            width={40}
            height={40}
            alt="React Logo"
          />
          <Image
            src={"./material-ui_logo-2.svg"}
            width={40}
            height={40}
            alt="Material UI Logo"
          />
          <Image
            src={"./typescript_logo.svg"}
            width={40}
            height={40}
            alt="Typescript Logo"
          />
          <Image
            src={"./jest_logo.svg"}
            width={40}
            height={40}
            alt="Jest Logo"
          />
          <Image src={"./git_logo.svg"} width={40} height={40} alt="Git Logo" />
        </div>
      </article>
    </section>
  );
};
