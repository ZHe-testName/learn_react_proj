import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    //используем ref чтобы хранить данные от рендера к рендеру
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;

        //если ьы уже закем то наблюдаем то делаем дисконнект чтобы
        //не следить за тем что уже не нужно
        if (observer.current) observer.current.disconnect();

        const cb = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad){
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);

        //передаем в observer элемент за которым мы хотим наблюдать
        observer.current.observe(ref.current);
    }, [isLoading]);
};