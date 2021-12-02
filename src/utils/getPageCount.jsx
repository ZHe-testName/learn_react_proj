export function getPageCount (pageCount, limit){
    return Math.ceil(pageCount / limit);
};

export function computePaginationArr (totalCount){
    const resArr = [];

    for (let i = 1; i <= totalCount; i++) {
        resArr.push(i);
    };

    return resArr;
};