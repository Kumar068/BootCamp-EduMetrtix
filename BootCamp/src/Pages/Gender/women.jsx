import React, { useEffect, useState } from "react";
import "./women.css";
import { Select } from "antd";
import { getProduct } from "../../Redux/product/action";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Women1 from '../Images/women image1.png'
import Women2 from '../Images/women image2.png'
import Women3 from '../Images/women image3.png'
import Women4 from '../Images/women image4.png'
import Women5 from '../Images/women image5.png'
import Women6 from '../Images/women image6.png'
import Women7 from '../Images/women image7.png'
import Women8 from '../Images/women image8.png'
import Women9 from '../Images/women image9.png'
import Women10 from '../Images/women image10.png'
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
          <span>Home /</span> Women
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
      </div>
      <div className="proBox">
            <div className="proSkeleton">
              <img src={Women1} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women2} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women3} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women4} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women5} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women6} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women7} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women8} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women9} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Women10} alt="" />
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
