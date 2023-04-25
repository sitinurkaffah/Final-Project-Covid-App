import styles from "./Hello.module.css";

function hello() {
  return (
    <div className={styles.container}>
      <section className={styles.hello}>
        <div className={styles.hello__left}>
          <h2 className={styles.hello__title}>Covid ID</h2>
          <h3 className={styles.hello__covid}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hello__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button 
          className={styles.hello__button} 
          onClick={() => window.location.href='https://covid19.go.id/vaksin-covid19'}>
          Vaccine </button>
        </div>
        <div className="hello__right">
          <img
            className={styles.hello__image}
            src="image1.png"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default hello;
