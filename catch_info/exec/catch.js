const axios = require('axios')
const fs = require('fs')


const getNewsCategory = () => {
    axios.get('http://124.93.196.45:10001/prod-api/press/category/list', {
        params: {

        }
    })
        .then(function (response) {
            const data = JSON.stringify(response.data)
            // console.log(data);

            // fs.writeFile('./news_category.json', '' + data + '', (e) => {
            //     if (e) {
            //         console.log(e);
            //         return
            //     }
            // })
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
}

const getNewsList = () => {
    axios.get('http://124.93.196.45:10001/prod-api/press/press/list', {
        params: {

        }
    })
        .then(function (response) {
            const data = JSON.stringify(response.data)
            // console.log(data);

            // fs.writeFile('./news_list.json', '' + data + '', (e) => {
            //     if (e) {
            //         console.log(e);
            //         return
            //     }
            // })
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
}


// getNewsCategory()
// getNewsList()
