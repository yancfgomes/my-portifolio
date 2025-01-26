import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentation">
          <p>
            Hi, I am <br />
            <span>Yan Fernandes</span> <br />
            Dev Full Stack Jr.
          </p>
          <Link to="/about" className="btn btn-red">Discover More About Me</Link>
        </div>

        <figure>
          <img
            className="img-home"
            src="public\undraw_developer-activity_dn7p.svg"
            alt="home image"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home;
