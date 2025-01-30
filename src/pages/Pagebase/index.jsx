import { Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Pagebase() {
  return (
    <main>
        <Header />
        <Container>
            <Outlet />
        </Container>

        <Footer />
    </main>
  );
}

export default Pagebase;