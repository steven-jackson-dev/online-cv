import { v4 as uuidv4 } from 'uuid';
// Source Image
import EarthAddict from '../assets/images/portfolio-images/recent-websites/earthaddict.png'
import EarthChild from '../assets/images/portfolio-images/recent-websites/earthchild.png'
import Quickbooks from '../assets/images/portfolio-images/recent-websites/quickbooks-new.png'
import schoolandleisure from '../assets/images/portfolio-images/recent-websites/schoolandleisure.png'
import FHF from '../assets/images/portfolio-images/recent-websites/fhf.png'
import herzlia from '../assets/images/portfolio-images/previous-websites/herzlia.png'
import smilefoundation from '../assets/images/portfolio-images/previous-websites/smilefoundation.png'
import patiowarehouse from '../assets/images/portfolio-images/previous-websites/patiowarehouse.png'

// Thumb
import EarthAddictThumb from '../assets/images/portfolio-images/thumb/recent-websites/earthaddict.png'
import EarthChildThumb from '../assets/images/portfolio-images/thumb/recent-websites/earthchild.png'
import QuickbooksThumb from '../assets/images/portfolio-images/thumb/recent-websites/quickbooks-new.png'
import schoolandleisureThumb from '../assets/images/portfolio-images/thumb/recent-websites/schoolandleisure.png'
import FHFThumb from '../assets/images/portfolio-images/thumb/recent-websites/fhf.png'
import herzliaThumb from '../assets/images/portfolio-images/thumb/previous-websites/herzlia.png'
import smilefoundationThumb from '../assets/images/portfolio-images/thumb/previous-websites/smilefoundation.png'
import patiowarehouseThumb from '../assets/images/portfolio-images/thumb/previous-websites/patiowarehouse.png'

export const PortfolioPreviousData = [
    {
        id: uuidv4(),
        name: 'Patiowarehouse',
        imgsrc: patiowarehouse,
        thumb: patiowarehouseThumb,
        type: 'Wordpress'
    },
    {
        id: uuidv4(),
        name: 'Herzlia',
        imgsrc: herzlia,
        thumb: herzliaThumb,
        type: 'Wordpress'
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
        name: 'Smile Foundation',
        imgsrc: smilefoundation,
        thumb: smilefoundationThumb,
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
