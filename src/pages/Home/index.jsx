import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./Home.module.css";


function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentation}>
            <p>
              Hi, I am <br />
              <span>Yan Fernandes</span> <br />
              Dev Full Stack Jr.
            </p>
            <Link to="/about" className={` ${styles.btn} ${styles.btn_red} `} >
              Discover More About Me
            </Link>
          </div>

          <figure>
            <img
              className={styles.img_home}
              src="public\undraw_developer-activity_dn7p.svg"
              alt="home image"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
