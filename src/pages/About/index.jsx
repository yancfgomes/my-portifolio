import styles from "./About.module.css";
import avatar from "./images/avatar.jpeg";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiMysql } from "react-icons/si";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.texts}>
          <h2>Sobre</h2>

          <p>
            I&apos;m <span>Yan Fernandes</span> <br />
            <strong>Dev Full Stack Jr.</strong>
          </p>

          <p>
            From front-end to back-end: expanding horizons in Full Stack
            development.
          </p>

          <p>I am passionate about turning ideas into digital reality.</p>

          <p>
            Specialized in creating dynamic and intuitive applications, <br />
            with a focus on user experience.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icons}>
          <FaHtml5 />
          <FaCss3 />
          <FaJsSquare />
          <FaReact />
          <RiTailwindCssFill />
          <FaPython />
          <FaJava />
          <SiPostgresql />
          <SiMysql />
        </div>
      </div>
    </section>
  );
}

export default About;
