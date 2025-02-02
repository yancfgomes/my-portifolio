import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentation}>
        <p>
          Hi, I am <br />
          <span>Yan Fernandes</span> <br />
          Dev Full Stack Jr.
        </p>
        <Link to="/about" className={` ${styles.btn} ${styles.btn_red} `}>
          Discover More About Me
        </Link>
      </div>

      <figure>
        <img
          className={styles.img_home}
          src="/undraw_developer-activity_dn7p.svg"
          alt="home image"
        />
      </figure>
    </section>
  );
}

export default Home;
