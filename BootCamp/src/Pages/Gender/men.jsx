import React, { useEffect, useState } from "react";
import "./kids.css";
import { Select } from "antd";
import { getProduct } from "../../Redux/product/action";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, } from "react-router-dom";
import Men1 from '../Images/men image1.png'
import Men2 from '../Images/men image2.png'
import Men3 from '../Images/men image3.png'
import Men4 from '../Images/men image4.png'
import Men5 from '../Images/men image5.png'
import Men6 from '../Images/men image6.png'
import Men7 from '../Images/men image7.png'
import Men8 from '../Images/men image8.png'
import Men9 from '../Images/men image9.png'
import Men10 from '../Images/men image10.png'
const Product = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("gender");
  const categories = new URLSearchParams(search).get("categories");
  const keyword = new URLSearchParams(search).get("keyword");
  const [prevQuery, setPrevQuery] = useState(query);
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  const {
    products: { data },
  } = useSelector((store) => store.products);
  console.log(data);
  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(getProduct(keyword, query, page, categories));
    setPrevQuery(query);
  }, [dispatch, keyword, query, page, prevQuery, categories]);

  const sortOptions = [
    {
      label: "Better Discount",
      value: "discount",
    },
    {
      label: "Customer Ratings",
      value: "rating",
    },
    {
      label: "Price low to high",
      value: "asc",
    },
    {
      label: "Price high to low",
      value: "desc",
    },
  ];
  <div className="proSort">
          <div>
            <Select
              size="large"
              placeholder="Sort By"
              style={{
                width: 200,
                border: "1px solid gray",
                color: "black",
                borderRadius: "8px",
                outline: "none",
              }}
              options={sortOptions}
            />
          </div>
        </div>
  return (
    <div className="productCon">
      <div className="proContainer">
        <p className="proNavigation">
          <span>Home /</span> Men
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
      </div>
      <div className="proBox">
            <div className="proSkeleton">
              <img src={Men1} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men2} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men3} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men4} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men5} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men6} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men7} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men8} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men9} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Men10} alt="" />
            </div>
          </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button>{page}</button>
        <button
          disabled={
            page === Math.ceil(data?.totalPage) || data?.products.length < 20
          }
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
