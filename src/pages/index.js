import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Home = () => {

  return (
    <>
    <Header />
    <img src='./upper_right.svg' id='upper_right' />
    <img src='./lower_left.svg' id='lower_left' />
    <img src='./stars.svg' id='stars1' />
    <img src='./stars.svg' id='stars2' />
    <div id='landing-content'>
      <h1>Crafting Digital Masterpieces</h1>
      <p>Step into the world of Idea Alchemists, where ideas transform into vibrant internet businesses. Our passionate team weaves digital magic, forging an array of innovative online ventures that captivate and inspire.</p>
      <Link href="/portfolio"><button>PORTFOLIO</button></Link>
    </div>
    <Footer />
    </>
  )
};

export default Home;
