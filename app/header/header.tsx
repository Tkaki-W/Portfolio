import styles from "./header.module.css";

export function header() {
  return (
      <div className={styles.header_compornent}>
        <div>
          <h3>TAKAKI NODA</h3>
        </div>
        <div className={styles.header_index}>
          <h3>History</h3>
          <h3>Product</h3>
        </div>
      </div>
  );
}