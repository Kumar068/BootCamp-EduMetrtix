import React, { useEffect, useState } from "react";
import "./kids.css";
import { Select } from "antd";
import { getProduct } from "../../Redux/product/action";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, } from "react-router-dom";
import Kids1 from '../Images/kids image1.png'
import Kids2 from '../Images/kids image2.png'
import Kids3 from '../Images/kids image3.png'
import Kids4 from '../Images/kids image4.png'
import Kids5 from '../Images/kids image5.png'
import Kids6 from '../Images/kids image6.png'
import Kids7 from '../Images/kids image7.png'
import Kids8 from '../Images/kids image8.png'
import Kids9 from '../Images/kids image9.png'
import Kids10 from '../Images/kids image10.png'
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
          <span>Home /</span> Kids
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
      </div>
      <div className="proBox">
            <div className="proSkeleton">
              <img src={Kids1} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids2} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids3} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids4} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids5} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids6} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids7} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids8} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids9} alt="" />
            </div>
            <div className="proSkeleton">
              <img src={Kids10} alt="" />
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
