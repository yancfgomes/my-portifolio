import styles from "./Page404.module.css";

function Page404() {
  return (
    <>
        <h2 className={styles.title2} >Ops!🫤</h2>
        <div className={styles.txts}>
          <span className={styles.big_txt}>404</span>
          <strong className={styles.red_txt}>Page Not Found</strong>
        </div>
    </>
  );
}

export default Page404;
