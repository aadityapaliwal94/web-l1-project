import Navbar from "../components/navbar"
import { useEffect, useState } from "react"
import SliderImage from "../components/SliderImage"
import Arrow from "../components/Arrow"
import Dots from "../components/Dots"
import ProductCard from "../components/ProductCard"
import SectionTitle from "../components/SectionTitle"
import SponsersCard from "../components/SponsersCard"
import Footer from "../components/Footer"
import BuyProductPopup from "../components/BuyProductPopup"
import SuccessPopup from "../components/SuccessPopup"
import { usePurchase } from "../contexts/PurchaseContext"
import { fetchCarouselImages, fetchProducts, fetchSponsors } from "../services/productService"

const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [caresoul_images, setCaresoulImages] = useState([])
    const [products, setProducts] = useState([])
    const [sponsers_data, setSponsersData] = useState([])
    
    const {
        buyingItem,
        showBuyPopup,
        showSuccess,
        handleBuyButtonTap,
        closeBuyPopup,
        handlePurchaseSubmit,
        closeSuccessPopup,
    } = usePurchase()    

    // Fetch data on component mount
    useEffect(() => {
        const loadData = async () => {
            try {
                const [carouselResponse, productsResponse, sponsorsResponse] = await Promise.all([
                    fetchCarouselImages(),
                    fetchProducts(),
                    fetchSponsors()
                ]);
                
                setCaresoulImages(carouselResponse.data || []);
                setProducts(productsResponse.data || []);
                setSponsersData(sponsorsResponse.data || []);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };
        
        loadData();
    }, []);

    useEffect(() => {
        if (caresoul_images.length === 0) return;
        
        const timerId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
            prevIndex == caresoul_images.length - 1 ? 0 : prevIndex + 1)            
        }, 3000);
        return () => clearInterval(timerId)
    }, [caresoul_images])    

    const onLeftCheveronClick = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex == 0 ? caresoul_images.length - 1 : prevIndex - 1)
    }

    const onRightCheveronClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex == caresoul_images.length - 1 ? 0 : prevIndex + 1)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="h-auto bg-theme-background min-h-screen">            
            <Navbar/>
            <div>
                <div className="relative h-64 md:h-96 lg:h-108 mb-8 md:mb-16 lg:mb-30 shadow-2xl overflow-hidden">                
                    <SliderImage caresoul_images={caresoul_images} currentIndex={currentIndex} />
                    <Arrow onLeftCheveronClick={onLeftCheveronClick} onRightCheveronClick={onRightCheveronClick} currentIndex={currentIndex} />                                        
                    <button 
                        onClick={() => handleBuyButtonTap(caresoul_images[currentIndex])} 
                        className="btn-secondary absolute bottom-10 md:bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 px-6 md:px-10 w-auto md:w-50 h-10 md:h-12 rounded-full md:rounded-ee-full text-base md:text-xl"
                    >
                        Buy Now
                    </button>
                    <Dots caresoul_images={caresoul_images} currentIndex={currentIndex} goToSlide={goToSlide} />                                                         
                </div>                
                <div className="pb-6 md:pb-10"> 
                    <SectionTitle title="The latest." subTitle="Take a look at what's new right now." />                   
                    <div className="px-4 md:px-8 lg:px-30 pb-8 md:pb-12 lg:pb-18 flex gap-4 md:gap-5 overflow-x-scroll flex-nowrap no-scrollbar">
                        {products.map((item, index) => {
                            return (
                                <ProductCard key={"product "+ index} product={item} index={index} onBuyProduct={handleBuyButtonTap} />
                            )
                        })}                                                                  
                    </div>
                    <SectionTitle title="Help is here." subTitle="Whenever and however you need it." />
                    <div className="px-4 md:px-8 lg:px-30 pb-8 md:pb-12 lg:pb-18 flex gap-4 md:gap-5 overflow-x-scroll flex-nowrap no-scrollbar">
                        {sponsers_data.map((item, index) => {
                            return (
                                <SponsersCard key={"sponsers "+ index} product={item} index={index} onBuySponser={handleBuyButtonTap} />
                            )
                        })}                                                                  
                    </div>
                    <Footer />                    
                    <BuyProductPopup item={buyingItem} show={showBuyPopup} onCloseTap={closeBuyPopup} onFormSubmit={handlePurchaseSubmit} />

                    {showSuccess && (
                        <SuccessPopup isOpen={true} message={"Thank you for the purchase."} onComplete={closeSuccessPopup} />
                    )}
                </div>
            </div>            
        </div>
    )
}

export default HomePage