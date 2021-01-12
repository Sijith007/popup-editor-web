import axios from 'axios'

export default {

    /**
     * @description To get popup properties.
     */
    getPopup() {
        return axios.get(`${process.env.VUE_APP_BASE_URL}popups/1`)
        .then((result) => {
            const data = result.data[0];
            if (data) {
                data.containerWidth = parseInt(data.containerWidth, 10)
                data.containerHeight = parseInt(data.containerHeight, 10)
                data.elements = JSON.parse(data.items);
            }
            return data;
        })
    },

    /**
     * @description To save popup properties.
     * @param params Popup parameters
     */
    savePopup(params) {
        return axios.put(`${process.env.VUE_APP_BASE_URL}popups/1`, params)
    },
}
