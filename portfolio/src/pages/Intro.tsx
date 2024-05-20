
import { Link } from 'react-router-dom';
import '../styles/Intro.css'


function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <p>
            <code>Put something way more interesting here.</code>
            <Link to="home">Home</Link>
          </p>
        </header>
      </div>
    );
  }

  export default Intro