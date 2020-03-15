import { v4 as uuidv4 } from 'uuid';

// Source Image
import Handicaps from '../assets/images/portfolio-images/recent-websites/handicaps.png'
import OnTap from '../assets/images/portfolio-images/recent-websites/ontap.png'
import EarthAddict from '../assets/images/portfolio-images/recent-websites/earthaddict.png'
import EarthChild from '../assets/images/portfolio-images/recent-websites/earthchild.png'
import Quickbooks from '../assets/images/portfolio-images/recent-websites/quickbooks-new.png'
import schoolandleisure from '../assets/images/portfolio-images/recent-websites/schoolandleisure.png'
import FHF from '../assets/images/portfolio-images/recent-websites/fhf.png'
import Orlichem from '../assets/images/portfolio-images/recent-websites/orlichem.png'

// Thumb
import HandicapsThumb from '../assets/images/portfolio-images/thumb/recent-websites/handicaps.png'
import OnTapThumb from '../assets/images/portfolio-images/thumb/recent-websites/ontap.png'
import EarthAddictThumb from '../assets/images/portfolio-images/thumb/recent-websites/earthaddict.png'
import EarthChildThumb from '../assets/images/portfolio-images/thumb/recent-websites/earthchild.png'
import QuickbooksThumb from '../assets/images/portfolio-images/thumb/recent-websites/quickbooks-new.png'
import schoolandleisureThumb from '../assets/images/portfolio-images/thumb/recent-websites/schoolandleisure.png'
import FHFThumb from '../assets/images/portfolio-images/thumb/recent-websites/fhf.png'
import OrlichemThumb from '../assets/images/portfolio-images/thumb/recent-websites/orlichem.png'


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
    {
        id: uuidv4(),
        name: 'Quickbooks',
        imgsrc: Quickbooks,
        thumb: QuickbooksThumb,
        type: 'Wordpress'
    },

    {
        id: uuidv4(),
        name: 'School & Leisure',
        imgsrc: schoolandleisure,
        thumb: schoolandleisureThumb,
        type: 'Wordpress'
    },

    {
        id: uuidv4(),
        name: 'On Tap',
        imgsrc: OnTap,
        thumb: OnTapThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'FHF',
        imgsrc: FHF,
        thumb: FHFThumb,
        type: 'Wordpress'
    },

]


export default []

