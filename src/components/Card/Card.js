import styles from "./Card.module.css"

function Card(props){
    const { card, cardStyle } = props;
    console.log(card);
    return (
        <div className={styles.card} style={cardStyle}>
            <h3 className={styles.card__status}>
                {card.status}
            </h3>
            <p className={styles.card__total}>
                {card.total}
            </p>
        </div>
    )
}

export default Card;
