import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Toy Mania | ${title} `;
    }, [title])
};

export default useTitle;