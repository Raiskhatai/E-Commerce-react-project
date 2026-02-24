# PAGINATION

# 1 WE MAKE STATE HOOK FOR CURRENT PAGE

const [page, setpage] = useState(1);

const handlePage = (currentpage) => {
setpage(currentpage);
};

DYNAMIC = (TOTAL) PAGES

const dynamic = Math.ceil(filterData.length / 9);

# 2 IN PAGINATION PAGE WE CREATE A FUNCTION

const pages = [];
// TOTAL = (DYNAMIC)/(filter.length/9) 9 YEH EK PAGE MEY KITNE ITEM DIKHANE HEY

// THIS FUNCTION GIVE ARRAY OF PAGE NUMBERS.
const getPages = (current, total) => {

// IF TOTAL PAGE IS LESS THEN 5 HEY TO 1 SE LEKAR JITNE PAGE BANE HEY UTNE PAGE SHOW KARO .
if (total <= 5) {
for (let i = 1; i <= total; i++) {
pages.push(i);
}
}
// PAGE 5 SE JAYDA HO TAB
else {
if (current <= 3) {
// AGAR ABHI HUM JIS PAGE PAR HEY WAH 3 SE KAM HEY TO PAGINATION BAR IS TARAH SHOW KARO YA ARRAY MEY ESE ITEM PUSH KARO
pages.push(1, 2, 3, "...", total);
}
// AGAR ABHI HUM JIS PAGE PAR HEY WAH LAST PAGE -2 SE JAYDA HEY TO PAGINATION BAR IS TARAH SHOW KARO YA ARRAY MEY ESE ITEM PUSH KARO

else if (current > total - 2) {
pages.push(1, "...", total - 2, total - 1, total);
}

// AGAR ABHI HUM JIS PAGE PAR HEY WAH NA JAYDA HEY NA KAM HEY TO PAGINATION BAR IS TARAH SHOW KARO YA ARRAY MEY ESE ITEM PUSH KARO

else {
pages.push(1, "...", current - 1, current, current + 1, "...", total);
}
}
return pages;
}

# 3 THIS IS HOW WE SHOW PRODUCTS IN PRODUCT PAGE

{filterData.slice(page (_) 9 - 9, page (_) 9).map((item, idx)) => {}}

PAGE =1
1*9 -9=0 TO 1*9 =9
2*9 -9=9 TO 2*9 =18

# PAGINATION CODE :-

// BUTTON PAGE KO  +1 YA -1 KAR RHYE HEY

<button
onClick={() => {{
          setpage((prev) => prev - 1);
        }}
disabled={page === 1}
className={`${page === 1 ? "bg-red-400 text-white" : "bg-red-600 text-white"} text-black font-semibold capitalize rounded-l p-2 cursor-pointer hover:scale-105 mx-2`} >
prev
</button>
{getPages(page, dynamic).map((item, idx) => {
return (
<span
className={`mx-1 ${item === page ? "text-red-500 text-2xl" : "text-black"} cursor-pointer`}
onClick={() => (typeof item == "number" ? handlePage(item) : null)} >
{item}
</span>
);
})}
<button

        onClick={() => {
          setpage((prev) => prev + 1);
        }}
        disabled={page === dynamic}
        className={`${page === dynamic ? "bg-red-300 text-white" : "bg-red-600 text-white"} text-black font-semibold capitalize  rounded-l p-2 cursor-pointer hover:scale-105 mx-2`}
      >
        next
      </button>
