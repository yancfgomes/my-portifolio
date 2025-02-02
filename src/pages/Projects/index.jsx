import { useState, useEffect } from "react";
import Card from "../../components/Cards";
import styles from "./Projects.module.css";

function Projects() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/yancfgomes/repos?page=1&per_page=50"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      {repositories.length > 0 ? (
        <section className={styles.list}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projects;
