

class QueryBuilder {
    constructor( initQuery = '' ){
        this.initQuery = initQuery.includes('?')
                        ? initQuery
                        : initQuery.trim() + '?';
    }
    set( key , value ){
        this.initQuery += this.initQuery[this.initQuery.length-1] === '?'
                         ? `${key}=${value}`
                         : `&${key}=${value}`;
        return this;
    }
    get(){
        return this.initQuery;
    }
}

export default function useQueryBuilder( initQuery = '' ){
    let builder = new QueryBuilder(initQuery);
    const consumer = {
        and : ( key , value ) => {
            builder =  builder.set(key,value);
            return consumer;
        },
        build : () => builder.get() 
    }

    return consumer;
}