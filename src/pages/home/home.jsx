import './home.css'
import Header from "../../component/header/header";
function Home() {
    return (
        <div className="home-main">
            <Header />

            <div>
                <div className="grp-1">
                    <div className="crd-1">
                        <div className='tp-crd-2'>
                            <p>Your current location</p>
                        </div>
                        <div className='crd-main'>
                            <div className='crd-1-prt-1'>
                                <div>
                                    <p>Bright Marvelous cordinates</p>
                                    <p className='cord'>6*27’38.2”N 3*08’12.1”E</p>
                                </div>
                                <div>
                                    <img src=".\asset\Frame 1261156974.svg" alt="" />
                                </div>
                            </div>

                            <div className='crd-1-prt-2'>
                                <h2>Badagry </h2>
                                <p>No,34 Limca Bustop</p>
                            </div>
                        </div>
                    </div>

                    <div className="crd-2">
                        <div className='tp-crd-2'>
                            <p>Map</p>
                            <a href="/map">View Map</a>
                        </div>
                        <div className="map-img-div">
                            <img src=".\asset\map.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="grp-2">
                    <div className="crd-3">
                        <p className='tp-crd-2'>Photos</p>
                        <div className='card-main-2'>
                            <p className='tp-crd-2'>8 Photos </p>
                            <div>
                                <img src=".\asset\photo 1.svg" alt="" />
                                <img src="\asset\photo 2.svg" alt="" />
                                <img src="\asset\photo 3.svg" alt="" />
                                <img src="\asset\photo 4.svg" alt="" />
                            </div>
                           
                           <div>
                                <img src="\asset\photo 5.svg" alt="" />
                                <img src="\asset\photo 6.png" alt="" />
                                <img src="\asset\photo 7.svg" alt="" />
                                <img src="\asset\photo 8.svg" alt="" />
                           </div>
                        </div>
                    </div>
                    <div className="crd-4">
                        <p className='tp-crd-2'>Recently visited places</p>
                        <div className="card-main-3">
                            <div className='nvme'>
                                <img src=".\asset\ojo place.svg" alt=""/>
                                <div>
                                    <p>Ojo Local Government</p>
                                    <p className='ssp'>1 apoi Avenue Street Shibiri</p>
                                </div>
                            </div>
                            <div className='nvme'>
                                <img src=".\asset\ojo place.svg" alt=""/>
                                <div>
                                    <p>Ojo Local Government</p>
                                    <p className='ssp'>1 apoi Avenue Street Shibiri</p>
                                </div>
                            </div>
                            <div className='nvme'>
                                <img src=".\asset\ojo place.svg" alt=""/>
                                <div>
                                    <p>Ojo Local Government</p>
                                    <p className='ssp'>1 apoi Avenue Street Shibiri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;