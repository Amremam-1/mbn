import styles from "./styles.module.scss"

const Team = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_wrapper}>
        <div className={styles.honeycomb_right}>
          <div className={styles.honeycomb_cell}>
            <div className={styles.honeycomb_title}>
              <h3>
                <span>MAHER</span> BIN NAIF
              </h3>
              <p>CEO</p>
            </div>
          </div>
        </div>

        <ul className={styles.honeycomb_left}>
          <div className={styles.lineOne}>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>
          <div className={styles.lineTwo}>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>
          <div className={styles.lineThree}>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
          </div>

          <div className={styles.lineFour}>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>

          <div className={styles.lineFive}>
            <li className={`${styles.honeycomb_cell}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell}`}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>

          <div className={styles.lineSix}>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell}`}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>
          <div className={styles.lineSaven}>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={`${styles.honeycomb_cell} ${styles.hidden}`}></li>

            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
            <li className={styles.honeycomb_cell}></li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Team
