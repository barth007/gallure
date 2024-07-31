import {useState, useEffect} from 'react'

const useImagePreloader = (imageUrl) =>{
    const [loadedImages, setLoadedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        let isCancelled = false;
        setLoading(true);
        const preloadImage = async()=>{
            const promises = imageUrl.map((src)=>{
                return new Promise((resolve, reject)=>{
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve({src, alt: 'Image'})
                    img.onerror = reject;
                });
            });
            try{
                const results = await Promise.all(promises)
                if(!isCancelled){
                    setLoadedImages(results);
                    setLoading(false);
                }
            }catch (error){
                console.error('Failed to load images', error)
                if(!isCancelled){
                    setLoading(false)
                }
            }
        };
        preloadImage()
        return ()=> {
            isCancelled = true;
        };
    }, [imageUrl])
    return{loadedImages, loading}
}

export default useImagePreloader;