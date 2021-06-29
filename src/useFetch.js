import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [Data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        // const timeStamp = Math.floor(new Date().getTime()/1000.0)
        // const publicKey = "508e88a22b1458dd6c06ea41ec079acb"
        // const privetKey = "92dc2a7411ff2920a897162ce763ab7a99c68ddd"

        // var md5Hash = CryptoJS.MD5(`${timeStamp}${publicKey}${privetKey}`);

        setTimeout(() => {

            // # settimeout is for loading effect

            fetch(url)

                .then((res) => {
                    if (!res.ok) {
                        throw Error("failed to load the data from network");
                    }
                    console.log("responce data" + res.data)
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setisLoading(false)
                    console.log( data )
                })
                .catch(
                    (error) => { console.log(error.message) }
                )
        }, 1000);

        return ()=> console.log('cleanup trigred')

    }, [url])
    // [name]

    return ({ Data , isLoading })
    
}

export default useFetch
