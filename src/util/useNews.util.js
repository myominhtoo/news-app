import { useCallback, useEffect, useMemo, useState } from "react";
import useLogger from "./userLogger.util";
import axios from "axios";
import useQueryBuilder from "./useQueryBuilder.util";
import API from "../data/api.data";

const initValue = {
    isLoading : false,
    isError : false,
    errorMessage : '',
    data : [] ,
    isMoreFetching : false
}

export default function useNews({
    q = 'everything',
    from ,
    pageSize = 10,
    pageNo = 5
}){
    const [ info , setInfo ] = useState(initValue);
    const logger = useLogger('useNews Function line 17');

    const url = useMemo(() => {
        return useQueryBuilder(API.EVERYTHING)
                .and('q',q)
                .and('pageSize',pageSize)
                .and('page',pageNo)
                .and('sortBy','popularity')
                .build();
    } , [q,from,pageSize,pageNo]);

    const getNews = async () => {
        return await axios.get(url);
    }

    const fetchNews = useCallback(async () => {
        // code for fetching
        logger.info('Start Fetching News');

        // setting state for loading start
        setInfo( prevInfo => ({
            ...prevInfo , 
            isLoading : true
        }));
            getNews()
            .then( res => {
                setInfo( prevInfo => ({
                    ...prevInfo,
                    isLoading : false,
                    data : [ ...prevInfo.data , ...res.data.articles ]
                }));
            })
            .catch( e => {
                console.log(e)
                setInfo( prevInfo => ({
                    ...prevInfo,
                    isLoading : false,
                    isError : true,
                    errorMessage : e
                }))
            })
  
        logger.info('Done Fetching News')
    } , [] );

    const fetchMore = () => {
        console.log(url);
        if(info.isMoreFetching ) return;
        setInfo( prevInfo => {
            return { ...prevInfo , isMoreFetching : true }
        });
        getNews()
        .then( res => {
            setInfo( prevInfo => {
                return ({ 
                    ...prevInfo ,
                    isError : false,
                    isMoreFetching : false ,
                    data : [ ...prevInfo.data , ...res.data.articles ]
                });
            });
        })
        .catch( () => {
            setInfo( prevInfo => ({
                ...prevInfo ,
                isMoreFetching : false,
                isError : true
            }));
        })
    }
    
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return {
        ...info,
        fetchMore
    }
}