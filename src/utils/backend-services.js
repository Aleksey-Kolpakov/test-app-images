import axios from 'axios';

const getImages = () => {
    return axios.get(`https://tzfrontend.herokuapp.com/images/`)
        .then(({ data }) => console.log(data));
}

export default getImages;