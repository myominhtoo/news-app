import { useCallback, useEffect, useMemo, useState } from "react";
import useLogger from "./userLogger.util";
import axios from "axios";
import useQueryBuilder from "./useQueryBuilder.util";
import API from "../data/api.data";

const initValue = {
    isLoading : false,
    isError : false,
    errorMessage : '',
    data : [] || {}
}

export default function useNews({
    q = 'everything',
    from ,
    pageSize = 10,
    pageNo = 1
}){
    const [ info , setInfo ] = useState(initValue);
    const logger = useLogger('useNews Function line 17');

    const url = useMemo(() => {
        return useQueryBuilder(API.EVERYTHING)
                .and('q',q)  
                .build();
    } , [q,from,pageSize,pageNo]);

    const fetchNews = useCallback(async () => {
        // code for fetching
        logger.info('Start Fetching News');

        // setting state for loading start
        setInfo( prevInfo => ({
            ...prevInfo , 
            isLoading : true
        }));

        await axios.get(url)
            .then( res => {
                setInfo( prevInfo => ({
                    ...prevInfo,
                    isLoading : false,
                    data : res.data
                }));
            })
            .catch( e => {
                setInfo( prevInfo => ({
                    ...prevInfo,
                    isError : true,
                    errorMessage : e
                }))
            })

        
        logger.info('Done Fetching News')
    } , [url] );

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return {
        ...info
    }
}