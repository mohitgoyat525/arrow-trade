import DetailsHero from '@/components/blog details/DetailsHero'
import MarketInsights from '@/components/blog details/MarketInsights'
import LatestArticles from '@/components/blog/LatestArticles'
import UsdJp from '@/components/blog/UsdJp'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
    return (
        <>
            <UsdJp/>
            <DetailsHero />
            <MarketInsights />
            <LatestArticles />
            <Footer/>
     </>
  )
}

export default page