import { Link } from "react-router-dom";

export default function FeaturedCategories(){
    return (
        <>
            <div className="page_featured_categories">
                <div className="featured_category">
                    <div className="featured_category_image"></div>
                    <div className="featured_category_name">Laminate Flooring</div>
                </div>
                <div className="featured_category">
                    <div className="featured_category_image"></div>
                    <div className="featured_category_name">Laminate Flooring</div>
                </div>
                <div className="featured_category">
                    <div className="featured_category_image"></div>
                    <div className="featured_category_name">Laminate Flooring</div>
                </div>
                <div className="featured_category">
                    <div className="featured_category_image"></div>
                    <div className="featured_category_name">Laminate Flooring</div>
                </div>
            </div>
            <div className="featured_category_view_more btn_wrapper">
                <Link to='#' className="btn btn_link btn_link_default">View Categories</Link>
            </div>
        </>
    )
}