const db = require('../db/index')
const fs = require('fs')


const read_and_write_news_category = () => {
    fs.readFile('./news_category.json', (e, data) => {
        if (e) throw e

        data = (JSON.parse(data.toString())).data
        // console.log(data);

        // const sql = 'insert into news_category values(?, ?)'
        // data.forEach(i => {
        //     db.query(sql, [
        //         i.id,
        //         i.name
        //     ], (e, rs) => {
        //         if (e) throw e
        //
        //         console.log(rs);
        //     })
        // })
    })

    return
}

const read_and_write_news_list = () => {
    fs.readFile('./news_list.json', (e, data) => {
        if (e) throw e

        data = (JSON.parse(data.toString())).rows
        // console.log(data);

        const sql = 'insert into news_list values(?, ?, ?, ?, ?, ?, ?)'
        data.forEach(i => {
            db.query(sql, [
                i.id,
                i.title,
                i.subtitle,
                i.content,
                'http://124.93.196.45:10001' + i.cover,
                i.type,
                i.publishDate
            ], (e, rs) => {
                if (e) throw e

                console.log(rs);
            })
        })
    })

    return
}


// read_and_write_news_category()
read_and_write_news_list()
