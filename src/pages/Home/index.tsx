
import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection'
import TabList from '../../components/TabList'
import { cuisineTypes } from '../../constants'
import Slider from '../../components/Slider'
import TagList from '../../components/TagList'
const Home = () => {
    useEffect(()=>{
        document.title = "Cook-io"
    },[])
    return (
        <main>
            <article>
                <HeroSection />
                <TabList />

                {
                    cuisineTypes.map((cuisine,index) =>{
                        return (
                            <Slider cuisineType={cuisine} index={index+1} key={cuisine} />
                        )
                    })
                }
                <TagList />
            </article>
        </main>
    )
}

export default Home