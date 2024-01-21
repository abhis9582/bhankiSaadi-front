import React from 'react'
import './Home.css'
import image from './images2.png'
import bgimage from './bgimage.jpg'
// import bgimage from "./assets/Indian_wedding_Delhi.jpg";
const Home = () => {
    return (
        <div className='mainContainer overlay' style={{height:"100vh", width:"100vw", backgroundImage:`url(${bgimage})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className="container-fluid">
                <h1 className='text-center text-underline'>Welcome to Bhan kiSaadi</h1>
                <div className="row text-center m-2">
                Bahan Ki Sadi is a heartfelt initiative dedicated to bringing joy and happiness to the lives of underprivileged families by supporting the marriage of their daughters. We believe in the power of community, compassion, and collective efforts to make a positive impact on the lives of those less fortunate.
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="card color-dark imgbox">
                            <img src={image} alt="dfa" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card color-dark imgbox ">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2021/01/SANJAY-JAISWAL.jpg?w=640&resize=640%2C480&quality=80" alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card color-dark imgbox">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2021/01/AP_19067415873533.jpg?w=770&resize=770%2C513&quality=80" alt="" />

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card color-dark imgbox">
                            <img src="
                https://www.aljazeera.com/wp-content/uploads/2021/01/AP_19067399243229.jpg?w=770&resize=770%2C498&quality=80" alt="" />

                        </div>
                    </div>
                </div>
                <h1 className='text-center mt-2'>Explore More</h1>
                <hr className='bg-danger' />
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellat mollitia inventore, harum vitae amet maiores possimus quis ratione non reiciendis aspernatur eum quisquam earum unde? Est impedit provident ex quae, natus fuga iste, laborum nemo soluta odit vero. Omnis incidunt cum architecto praesentium repudiandae, veritatis asperiores, soluta sapiente ipsam quidem accusamus magnam, autem eligendi. Optio expedita id aliquid saepe officiis quo aut autem quam quasi eaque repellat, provident magni atque quia voluptates voluptate! Hic aliquam fugiat et dignissimos excepturi labore nihil ipsa accusantium quidem cum quisquam harum numquam atque, quas nam nesciunt, fuga, adipisci nemo? Aut libero aspernatur repellat amet placeat sequi laboriosam incidunt voluptate, ad totam earum optio accusamus perspiciatis vel cum deserunt quidem recusandae dicta hic magnam nemo pariatur et! Ipsam eaque similique maxime eligendi enim
                </div>
            </div>
        </div>
    );
}
export default Home; 