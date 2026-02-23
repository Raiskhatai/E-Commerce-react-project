# FILTER PRODUCT :-

# 1:- isme hum sabse se pahle input se value leke unko set kar denge hooks useState ki madad se .

for EXAMPLE -

1 -input range box -
type="range"
value={price_range[1]}
onChange={(e) => {
setprice_range([price_range[0], Number(e.target.value)]);
}}

2 - select and option boxes

in select
value={brand}
onChange={handleBrand} :-
const handleBrand = (e) => {
setbrand(e.target.value);
};

3 - input text:-
type="text"
value={search}
onChange={(e) => {
setsearch(e.target.value);
}}

4 - input check box :-
type="checkbox"
value={item}
onChange={handleCategory}
checked={item == cateogery_check}

checked kya karta hey ? - - checked is liye lagaya ki sirf ek box he select ho jispe click kiya hey wahi hey ho.

# 2 in values ko filter kiya :-

# imp

yaha hum check kar rhey ki search karne par kya item title mey wah value hey hey to sath mey check hoga ki item.brand == brand ke nhi hey to brand == all etc.

const filterData = Data.filter((item) => {
return (
item.title.toLowerCase().includes(search.toLowerCase()) &&
(item.brand == brand || "all" == brand) &&
(item.category == cateogery_check || cateogery_check == "all") &&
item.price >= price_range[0] &&
item.price <= price_range[1]
);
});

# 3 yeh filter jab jab in state mey chang hota array waps filter karke fikterData mey new array aata us array ko hum map se jsx mey page par dikhate.
