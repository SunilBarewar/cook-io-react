
import React from 'react'
import HeroSection from '../../components/HeroSection'
import TabList from '../../components/TabList'
import { cuisineTypes } from '../../constants'
import Slider from '../../components/Slider'
const Home = () => {
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
            </article>
        </main>
    )
}

export default Home