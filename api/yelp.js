import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer titn5p1XIrNjKq5DZ71jhqtDo-pgZUE1fC_hCArNuTSOEhOWuKZA8iQKH2PYm3JgGVqxRIpVL3GnJA-eitu9hBtMGtArp-JEAFyk5m_5KBaBC1p5yvSRCelCBi21XXYx'
    }
});