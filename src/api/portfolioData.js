import { v4 as uuidv4 } from 'uuid';

// Source Image
import Handicaps from 'assets/images/portfolio-images/recent-websites/handicaps.png'
import EarthAddict from 'assets/images/portfolio-images/recent-websites/earthaddict.png'
import EarthChild from 'assets/images/portfolio-images/recent-websites/earthchild.png'
import Orlichem from 'assets/images/portfolio-images/recent-websites/orlichem.png'
import handicaps from 'assets/images/portfolio-images/freelance/handicaps.png'
import braveart from 'assets/images/portfolio-images/freelance/braveart.png'
import greatracketshop from 'assets/images/portfolio-images/freelance/greatracketshop.png'
import karoo from 'assets/images/portfolio-images/freelance/karoo-biking.png'
import thebaywash from 'assets/images/portfolio-images/freelance/thebaywash.png'
import openActive from 'assets/images/portfolio-images/freelance/openactive.png'

// Thumb
import HandicapsThumb from 'assets/images/portfolio-images/thumb/recent-websites/handicaps.png'
import EarthAddictThumb from 'assets/images/portfolio-images/thumb/recent-websites/earthaddict.png'
import EarthChildThumb from 'assets/images/portfolio-images/thumb/recent-websites/earthchild.png'
import OrlichemThumb from 'assets/images/portfolio-images/thumb/recent-websites/orlichem.png'
import handicapsThumb from 'assets/images/portfolio-images/freelance/handicaps_thumb.png'
import braveartThumb from 'assets/images/portfolio-images/freelance/braveart_thumb.png'
import greatracketshopThumb from 'assets/images/portfolio-images/freelance/greatracketshop_thumb.png'
import karooThumb from 'assets/images/portfolio-images/freelance/karoo-biking_thumb.png'
import thebaywashThumb from 'assets/images/portfolio-images/freelance/thebaywash_thumb.png'
import openActiveThumb from 'assets/images/portfolio-images/freelance/openactive.png'



export const homepagePortfolioData = [
    {
        id: uuidv4(),
        name: 'Orlichem',
        imgsrc: Orlichem,
        thumb: OrlichemThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Handicaps',
        imgsrc: Handicaps,
        thumb: HandicapsThumb,
        type: 'PHP Web Application'
    },
    {
        id: uuidv4(),
        name: 'EarthAddict',
        imgsrc: EarthAddict,
        thumb: EarthAddictThumb,
        type: 'CS Cart'
    },
    {
        id: uuidv4(),
        name: 'EarthChild',
        imgsrc: EarthChild,
        thumb: EarthChildThumb,
        type: 'CS Cart'
    },
]

export const PortfolioLatestData = [
    {
        id: uuidv4(),
        name: 'Orlichem',
        imgsrc: Orlichem,
        thumb: OrlichemThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Handicaps',
        imgsrc: Handicaps,
        thumb: HandicapsThumb,
        type: 'PHP Web Application'
    },
    {
        id: uuidv4(),
        name: 'Handicaps Site',
        imgsrc: handicaps,
        thumb: handicapsThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Brave Art',
        imgsrc: braveart,
        thumb: braveartThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Great Racket Shop',
        imgsrc: greatracketshop,
        thumb: greatracketshopThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Open Active',
        imgsrc: openActive,
        thumb: openActiveThumb,
        type: 'Wordpress/Custom'
    },
    {
        id: uuidv4(),
        name: 'Karoo Biking',
        imgsrc: karoo,
        thumb: karooThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'The Bay Wash',
        imgsrc: thebaywash,
        thumb: thebaywashThumb,
        type: 'Wordpress'
    },

]


