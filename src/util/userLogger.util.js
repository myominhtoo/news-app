
export default function useLogger( title = 'Logger' ){
    
    const $ = console;

    return {
        info : ( message = 'Message' ) => {
            $.log(`----- INFO for ${title} -----`);
            $.log(`----- ${message} ${new Date()} -----`);
            $.log(`----- END for ${title} -----`);
        },
        warn : ( message = 'Message' ) => {
            $.warn(`----- WARN for ${title} -----`);
            $.warn(`----- ${message} ${new Date()} -----`);
            $.warn(`----- END for ${title} -----`);
        },
        error : ( message = 'Message') => {
            $.error(`----- ERROR for ${title} -----`);
            $.error(`----- ${message} ${new Date()} -----`);
            $.error(`----- END for ${title} -----`);
        }
    }
}