import { useMemo } from "react";
import { computePaginationArr } from "../utils/getPageCount";

function usePagination (totalCount){
    return useMemo(() => {
        return computePaginationArr(totalCount);
    }, [totalCount]);
};

export default usePagination;