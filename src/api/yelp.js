import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:"Bearer w9pOeGqG3-Ot7kx0jrVkCS5-Dl1oltuqlSz_I-negqyMN8etMEXFDVLHHbET9LKqpvDWgbVW9gpPxfUAqmyTA_dboX3k87zEOXkqWRmu3-sYGeNubAjh6JRCxgpsY3Yx"
    }
})