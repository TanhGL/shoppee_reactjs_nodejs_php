import productApi from "api/productApi";
import { useEffect, useState } from "react";

function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const images = await productApi.getImages({ id: productId });
        const data = await productApi.getProduct({ id: productId });

        const newProduct = {
          ...data,
          images,
        };

        setProduct(newProduct);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }

      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}

export default useProductDetail;
