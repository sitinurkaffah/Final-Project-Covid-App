import Card from "../Card/Card";
import styles from "./Global.module.css"
import data from "../../utils/constants/indonesia"

function Global() {
    const desc = ['confirmed', 'recovered', 'death'];
    const { indonesia } = data;

    return (
        <div>
        <div className={styles.container}>
            <section className={styles.global}>
            <h2 className={styles.global__title}>Indonesia</h2>
            <p className={styles.global__subtitle}>Data Covid Berdasarkan Indonesia</p>
            <div className={styles.global__container}>
                {
                indonesia.map((status, index) => {
                    return <Card card={status} key={status.covid} style={desc[index]}/>
                })}
            </div>
            </section>
        </div>
        </div>
    );
}
export default Global;