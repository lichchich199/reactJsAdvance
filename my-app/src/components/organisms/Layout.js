import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
      <div style={{
        width:'100%',
        height: '100%'
      }}>
        <Header/>
        {props.children}
        <Footer/>
      </div>
    );
  }