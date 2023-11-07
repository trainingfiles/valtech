import { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Product from "./product";
import Footer from "./footer";
class App extends Component{
    render(){
        return <div>
                    <Header/>
                    <main>
                        <Banner/>
                        <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                        </div>
                    </div>
                    </main>
                    <Footer/>
                </div>
    }
}

export default App;