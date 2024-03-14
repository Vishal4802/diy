import React, { FC, useRef, useState, useEffect } from "react";
import { Images } from "../assets/data";
import ItemCard from "../components/item-card";
import filter from '../assets/icon/filter.svg'
import search from '../assets/icon/search-outline.svg'
import { useLocation } from "react-router-dom";

const Shop: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [originalImgData] = useState(Images);
    const [imgData, setImgData] = useState(originalImgData);
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [ratingFilter, setRatingFilter] = useState(1);
    const [isFilter, setIsFilter] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');
        if (type) {
            setCategoryFilter(type);
            applyFilters(type, ratingFilter);
        }
    }, [location.search, ratingFilter]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        setCategoryFilter(selectedCategory);
        applyFilters(selectedCategory, ratingFilter);
    };

    const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRating = parseFloat(event.target.value);
        setRatingFilter(selectedRating);
        applyFilters(categoryFilter, selectedRating);
    };

    const applyFilters = (category: string, rating: number) => {
        let filteredData = originalImgData;
        if (category !== "All") {
            filteredData = filteredData.filter(item => item.type === category);
        }
        filteredData = filteredData.filter(item => item.rating >= rating);
        setImgData(filteredData);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = event.target.value;
        const sortedData = [...imgData];
        if (selectedSort === "Low to High") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "High to Low") {
            sortedData.sort((a, b) => b.price - a.price);
        } else {
            sortedData.sort((a, b) => b.rating - a.rating);
        }
        setImgData(sortedData);
    };

    const handleSearch = () => {
        const searchKeyword = inputRef.current?.value.toLowerCase() || "";
        const filteredData = originalImgData.filter(item => item.name.toLowerCase().includes(searchKeyword));
        setImgData(filteredData);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }    

    const handleFilter = () => {
        setIsFilter(!isFilter)
    }

    return (
        <>
            <div className="flex justify-center gap-16 max-sm:flex-col">
                <aside className="w-[120rem] bg-[#FE7A36] flex flex-col gap-10 justify-start items-start pl-10 pt-12 pr-2 pb-12 max-sm:w-auto max-sm:flex-row max-sm:gap-5 max-sm:justify-center max-sm:px-2 max-sm:py-3">
                    <h1 className="text-[#E9F6FF] font-bold text-3xl max-sm:hidden">FILTERS</h1>
                    
                    <form className={`${isFilter ? "max-sm:hidden" : ""}`}>   
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" ref={inputRef} id="search" className="block w-full p-4 ps-10 text-sm  border rounded-lg" placeholder="Search" required />
                            <button type="submit" onClick={handleSearch} className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-[#FE7A36] text-[#E9F6FF]">Search</button>
                        </div>
                    </form>

                    <div className={`hidden cursor-pointer max-sm:rounded-lg max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bg-[#E9F6FF] ${isFilter? "max-sm:mt-0.5" : "max-sm:mt-2.5"} max-sm:p-1.5`} onClick={handleFilter}><img src={ isFilter ? search : filter}/></div>

                    <div className={`flex gap-2 max-sm:pt-1.5 ${isFilter ? "" : "max-sm:hidden max-sm:pt-2"}`}>
                        <label htmlFor="category" className="w-20 text-[#E9F6FF] font-bold text-lg max-sm:hidden">Category:</label>
                        <select name="category" id="category" className="rounded-md bg-[#E9F6FF] p-2 text-[#3652AD] font-medium max-sm:p-0.5 max-sm:font-normal max-sm:text-[#280274]" value={categoryFilter} onChange={handleCategoryChange}>
                            <option value="All">All</option>
                            <option value="Discs">Discs</option>
                            <option value="Heroes">Heroes</option>
                            <option value="Key Chains">Key Chains</option>
                        </select>
                    </div>
                    <div className={`flex gap-2 max-sm:pt-1.5 ${isFilter ? "" : "max-sm:hidden"}`}>
                        <label htmlFor="sort" className="w-20 text-[#E9F6FF] font-bold text-lg max-sm:hidden">Sort By:</label>
                        <select name="sort" id="sort" className="rounded-md bg-[#E9F6FF] p-2 text-[#3652AD] font-medium max-sm:p-0.5 max-sm:font-normal max-sm:text-[#280274]" onChange={handleSortChange}>
                            <option value="Popularity">Popularity</option>
                            <option value="High to Low">High to Low</option>
                            <option value="Low to High">Low to High</option>
                        </select>
                    </div>
                    <div className={`flex gap-2 max-sm:pt-1.5 ${isFilter ? "" : "max-sm:hidden"}`}>
                        <label htmlFor="rating" className="w-20 text-[#E9F6FF] font-bold text-lg max-sm:hidden">Rating:</label>
                        <select name="rating" id="rating" className="rounded-md bg-[#E9F6FF] p-2 text-[#3652AD] font-medium max-sm:p-0.5 max-sm:font-normal max-sm:text-[#280274]" value={ratingFilter} onChange={handleRatingChange}>
                            <option value={0.9}>Select</option>
                            <option value={4.5}>4.5+</option>
                            <option value={4}>4+</option>
                            <option value={3.5}>3.5+</option>
                            <option value={3}>3+</option>
                            <option value={2}>2+</option>
                            <option value={1}>1+</option>
                        </select>
                    </div>
                </aside>
                <div className="flex flex-wrap gap-10 justify-start pt-12 pb-12 w-[480rem] max-sm:w-auto max-sm:justify-center max-sm:pt-0">
                    {imgData.map((item) => (
                        <ItemCard
                            key={item.imgUrl}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                            type={item.type}
                            width="w-72"
                            height="h-64"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Shop;
