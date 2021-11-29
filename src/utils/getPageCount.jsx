function getPageCount (pageCount, limit){
    return Math.ceil(pageCount / limit);
};

export default getPageCount;