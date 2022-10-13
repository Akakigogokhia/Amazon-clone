import React from 'react'
import './Css/Home.css'
import cover from './amazon-cover.png'
import Product from './Product'
import Slideshow from './Slideshow'

function Home() {


  return (
    <div className='home'>
        <div className='home__slideshow'>
          <Slideshow />
        </div>
        <div className='home__container'>

            <div className='home__row'>
                <Product 
                  id='1'
                  title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller"
                  image="https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg"
                  price={29.99}
                  rating={4}
                  isChecked={true}
                />
                <Product 
                  id='2'
                  title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
                  image="https://m.media-amazon.com/images/I/51EVETDOOeL._AC_UY218_.jpg"
                  price={129.99}
                  rating={5}
                  isChecked={true}
                />
                <Product 
                  id='3'
                  title="SAMSUNG Galaxy Buds Live, True Wireless Earbuds with Active Noise Cancelling, Microphone"
                  image="https://m.media-amazon.com/images/I/61xTy482IpL._AC_SX425_.jpg"
                  price={29.99}
                  rating={3}
                  isChecked={true}
                />
            </div>
            <div className='home__row'>
            <Product 
                id='4'
                title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
                image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
                price={99.98}
                rating={5}
                isChecked={true}
                />
                <Product 
                  id='5'
                  title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor"
                  image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX522_.jpg"
                  price={359.99}
                  rating={4}
                  isChecked={true}
                />
                <Product 
                  id='6'
                  title='MSI Pulse GL66 Gaming Laptop: 15.6" 144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD'
                  image="https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_UY218_.jpg"
                  price={1289.97}
                  rating={5}
                  isChecked={true}
                />
            </div>
        </div>

    </div>
  )
}

export default Home