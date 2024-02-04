import './ProductList.css';
import { getPbImageURL, comma } from '@/utils';
import { useEffect, useState } from 'react';

async function fetchProducts(options) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PB_API}/collections/products/records`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal }).then((data) => {
      setProductList(data?.items);
      setIsLoading(false);
    });

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <div role="alert">데이터 로딩 중...</div>;
  }

  return (
    <div className="section-container">
      <ul className="product-list">
        {productList.map((item) => {
          const {
            id,
            brand,
            discount,
            price,
            description,
            karly_only,
            limited,
            dawn_package,
          } = item;
          const realPrice =
            parseInt((price - price * (discount * 0.01)) / 10) * 10;
          return (
            <li className="product-each" key={id}>
              <button className="list-cart" id={id}></button>
              <img className="product-img" src={getPbImageURL(item)} />
              <div className="product-info">
                <span className="delivery">
                  {dawn_package ? '샛별배송' : '판매자배송'}
                </span>
                <br />
                <span className="desc-1">{brand}</span>
                <br />
                {discount !== 0 && (
                  <span className="discount" data-id={id}>
                    {discount}%
                  </span>
                )}
                <span className="real-price">{comma(realPrice)}원</span>
                {discount !== 0 && (
                  <>
                    <br className="break" data-id={id} />
                    <span className="price" data-id={id}>
                      {comma(price)}
                    </span>
                  </>
                )}
                <br />
                <span className="desc-2">{description}</span>
                <br />
              </div>
              <div className="label-container">
                {karly_only && <span className="karly-only">Karly Only</span>}
                {limited && <span className="limited">한정수량</span>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
