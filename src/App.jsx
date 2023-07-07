import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/components/header'
import Footer from './assets/components/Footer'
import Review from './assets/components/Review'
import FurnitureDeals from './assets/components/FurnitureDeals'
import Banner from './assets/components/Banner'
import Deals from './assets/components/Deals'
import Menus from './assets/components/Menus'
import Map from './assets/components/Map'
import SearchInput from './assets/components/SearchInput'

import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {

  const [post, setPost] = useState(null);

  useEffect(() => {

    const fetchData = () => {
      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setPost(response.data);
      });
    }

    if (!post) {
      fetchData();
    }

  }, [post]);

  return (
    <>
      {post ? (<div>Hello</div>) : (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </div>
      )}
      <div className='container'>
        <Header />
        <div className='flex justify-between'>
          <Map />
          <SearchInput />
        </div>
        <Menus />
        <div className='flex'>
          <div className="w-2/5 text-5xl">
            We picked some <span className='text-orange-400'>cool things</span> for you</div>
          <div className="w-3/5">
            <Deals text={"Hot deals for you"} itemsLimit={6} showInfo={true} />
          </div>
        </div>
        <Banner heightNum={"80"} />
        <Deals text={"Today's hot deals"} itemsLimit={5} />
        <Deals text={"Your searched items"} itemsLimit={6} showInfo={true} />
        <Banner heightNum={"96"} ImageInfo={'../images/r3.png'} />
        <FurnitureDeals />

        <Review />
      </div>
      <Footer />
    </>
  )
}

export default App
