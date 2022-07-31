import React, { useEffect,useState } from "react";
import axios from 'axios'



const useFetch:React.FC = ({url}) => {
    const [data, setData] = useState<any | null>(null)
    const [loading,setLoading] = useState<boolean>()

    async function showCase() {
        try{
            const response = await axios.get(url)
            setData(response.data)
            setLoading(false)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        showCase()
    },[url])

    return {loading, data}
}


export default useFetch