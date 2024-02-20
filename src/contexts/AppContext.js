// create context
// provide context
// consume context

import { createContext, useState } from "react";
import { apiUrl } from "../baseUrl";

// include everything that we need to store the state in the context

export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [posts, setPosts] = useState([]);

    async function getData(page = 1, tag=null, category=null)
    {
        setLoading(true)
        let url = `${apiUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category)
        {
            url+= `&category=${category}`
        }
        try{
            const response = await fetch(url);
            const data = await response.json();

            setPage(data.page);
            setTotalPage(data.totalPages);
            setPosts(data.posts);

        }
        catch(error)
        {
            console.log(error);
        }
        setLoading(false);
    }

    function pageChange(page)
    {
        // setPage(page);
        getData(page);
    }


    const value = {
        loading,
        setLoading,
        page, 
        setPage,
        totalPage, setTotalPage,
        posts, setPosts,
        getData, 
        pageChange,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}