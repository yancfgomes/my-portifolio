import styles from "./Contact.module.css";
import { GoMail } from "react-icons/go";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
        <section className={styles.contact}>
          <h2>Contact</h2>
          <h3>Get in touch</h3>
          <p>So we can talk more about it.</p>

          <div className={styles.icons}>
            <a
              href="mailto:yancfgomes@gmail.com"
              target="_blank"
              rel="noopener noreffer"
            >
              <GoMail className={styles.icon} />
            </a>
            <a
              href="https://wa.me/5592984267992"
              target="_blank"
              rel="noopener noreffer"
            >
              <BsWhatsapp className={styles.icon} />
            </a>
            <a
              href="https://github.com/yancfgomes"
              target="_blank"
              rel="noopener noreffer"
            >
              <BsGithub className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/yancfgomes/"
              target="_blank"
              rel="noopener noreffer"
            >
              <BsLinkedin className={styles.icon} />
            </a>
          </div>
        </section>
  );
}

export default Contact;
