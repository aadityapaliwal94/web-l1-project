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
import { useLocalStorageArray } from "../hooks/useLocalStorageArray"

const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [showBuyPopup, setShowBuyPopup] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [buyingItem, setBuyingItem] = useState({})

    const {addItem} = useLocalStorageArray("buyers", [])

    const caresoul_images = [
        {
            title: "IPhone 17",
            desc: "Levish, Beautiful, and amazing",
            url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
        },
        {
            title: "MacBook Pro ",
            desc: "With Apple M3 Chip",
            url: "https://images.unsplash.com/photo-1530623288743-52a89e908add?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
        },
        {
            title: "Apple Watch",
            desc: "Perfect for hiking, biking and running",
            url: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
        },
        {
            title: "AirPods",
            desc: "Automatic device pairing and access Siri",
            url: "https://images.unsplash.com/photo-1660820936286-e373574178d7?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
        },          
    ]

    const products = [
        {
            title: "iPhone 17 Pro",
            desc: "All out Pro.",
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYlNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R2RBR0JWVHBRN0NKVm11SFZzeU45T2VCTXFJbjVIbEFUN05pTHFFYldZYzg",            
            price: 134900.00
        },
        {
            title: "MacBook Pro 14",
            desc: "Supercharged by M5.",
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMm9DK3hwOFVzTGV2T3V6VkdGOUQ2UnFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1lsekVRWVZWZFZsS2Q1VFBGdkVHSUhMQ2gzYU14VEs0V1BFdWdmdWl3NGg",
            price: 169900.00
        },
        {
            title: "Apple Watch Ultra 3",
            desc: "Personal beast.",
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202509_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vcHVDMzIyc2tYWmg0aGNQUGlxUnIvb1BmcGprWi9ydU5Tdi9VS1BVbTg5N3AwckMxbExydC8yeDhtUjlFVHdKVmo2K3c3eDN1QlVKV09nQzhyNmV5TTJpWHdhMjZDZlJTVzhJSFIwNlJvc2Y",            
            price: 89900.00
        },
        {
            title: "iPad Pro",
            desc: "Mmmmmm. Power.",
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTmRKNlp6TmhsQ0RBNndmZkxCVmYvSDZXYXJlRUd1cTBYTnRnbTNlazIvM3ZvdUZlR0V0VUdJSjBWaDVNVG95YkNJSU04U2x4akplUjNjVDFUUHpUaVU",            
            price: 99900.00
        },
        {
            title: "AirPod Pro 3",
            desc: "World's best.",
            url: "https://cdn.pixabay.com/photo/2022/05/28/05/29/airpods-7226558_1280.jpg",            
            price: 25900.00
        },        
                  
    ]

    const sponsers_data = [
        {
            title: "AirPods Pro 3",            
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eVRLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",            
            price: 25900.00
        },
        {
            title: "AirPods 4",            
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0aEQ4eDQxcUNOL3l1WDd2VTYzMXJYbkJkRlpCNVhYU3AwTldRQldlSnpRa01rSksyTE9QS1lFVXpHNmJsRVlaOWM",            
            price: 17900.00
        },
        {
            title: "Powerbeats fit - Wireless",            
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ME2M4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QjlmZ0RubmZNRHQ5SGxtVUtvQUZuL1lvYS9naDJJdU9KTWdGWjhKWFRmSms2RHY0VHJHQVNLdHdhbDBScVlGWEhFenhsblgvbXlhMDBxaHNxZm94dXc",            
            price: 24900.00
        },
        {
            title: "AirPods Max - Midnight",            
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpydzZxenl2STByZjdmUGYvR3dmM2RON01LWlMyVmEreEd6UVBWaXRHdkpLMWppQWdEZjVIVUoweGVCQnUrWEowU1ZhN1ZHY2VKVGQ4Nmx6UkdSNXd0OGI",            
            price: 59900.00
        },
        {
            title: "HomePod - Midnight",            
            url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-select-midnight-202210?wid=400&hei=400&fmt=jpeg&qlt=90&.v=N0JQcmtNWnVWeGozUXcxK2ZBcC9vUWxZUW9uUDlJNzU0RkU2VmwwNjZiSVZOYmZXUnpWekhFcFdLRUF2UkJ6V3ZvdUZlR0V0VUdJSjBWaDVNVG95Yk9DOFpxbkN3eGxiNlhoQmFhM0h0dms",            
            price: 32900.00
        },                          
    ]    

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
            prevIndex == caresoul_images.length - 1 ? 0 : prevIndex + 1)            
        }, 3000);
        return () => clearInterval(timerId)
    }, [])    

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

    const onBuyButtonTap = (item) => {
        setBuyingItem(item)
        setShowBuyPopup(true)
    }

    return (
        <div className="h-auto bg-gray-100">            
            <Navbar/>
            <div>
                <div className="relative h-108 mb-30 shadow-2xl">                
                    <SliderImage caresoul_images={caresoul_images} currentIndex={currentIndex} />
                    <Arrow onLeftCheveronClick={onLeftCheveronClick} onRightCheveronClick={onRightCheveronClick} currentIndex={currentIndex} />                                        
                    <button onClick={() => onBuyButtonTap(caresoul_images[currentIndex])} className="absolute bottom-5 px-10 w-50 h-12 rounded-ee-full bg-black/75 text-xl text-white active:opacity-50">Buy Now</button>
                    <Dots caresoul_images={caresoul_images} currentIndex={currentIndex} goToSlide={goToSlide} />                                                         
                </div>                
                <div className="pb-10"> 
                    <SectionTitle title="The latest." subTitle="Take a look at what’s new right now." />                   
                    <div className="pl-30 pr-5 pb-18 flex gap-5 overflow-x-scroll flex-nowrap no-scrollbar">
                        {products.map((item, index) => {
                            return (
                                <ProductCard key={"product "+ index} product={item} index={index} onBuyProduct={onBuyButtonTap} />
                            )
                        })}                                                                  
                    </div>
                    <SectionTitle title="Help is here." subTitle="Whenever and however you need it." />
                    <div className="pl-30 pr-5 pb-18 flex gap-5 overflow-x-scroll flex-nowrap no-scrollbar">
                        {sponsers_data.map((item, index) => {
                            return (
                                <SponsersCard key={"sponsers "+ index} product={item} index={index} onBuySponser={onBuyButtonTap} />
                            )
                        })}                                                                  
                    </div>
                    <Footer />                    
                    <BuyProductPopup item={buyingItem} show={showBuyPopup} onCloseTap={() => {
                        setShowBuyPopup(false)
                    }} onFormSubmit={(name, email, itemName) => {
                        addItem({name:name, email:email, items: itemName})
                        setBuyingItem({})
                        setShowBuyPopup(false)
                        setShowSuccess(true)
                    }} />

                    {showSuccess && (
                        <SuccessPopup isOpen={true} message={"Thank you for the purchase."} onComplete={() => {
                            setShowSuccess(false)
                        }} />
                    )}
                </div>
            </div>            
        </div>
    )
}

export default HomePage