import { useMemo } from "react";

function useSortedPosts (posts, sort){
    return useMemo(() => {
        return (sort)
                        ? 
                        [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
                        :
                        posts;
    }, [sort, posts]);
};

export default function usePosts (posts, sort, query){
    //с помощю useMemo мы добиваемся оптимизации
    //без этого у нас будут перерисовки и фильтрация постов на каждый клик в
    //инпуте поиска поста

    //в массиве зависимостей мы следим за некоторыми данными и толко после их
    //измененй будет перекеширование и вызов функции
    //а так вычисления будут браться из еша и проводится не будут
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSelectedPosts = useMemo(() => sortedPosts
                                                    .filter(p => p.title.toLowerCase().includes(query.toLowerCase())
                                                    ), [query, sortedPosts]);

    return sortedAndSelectedPosts;
};