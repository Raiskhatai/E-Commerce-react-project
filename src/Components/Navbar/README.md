# 3 important work i do in navbar

# 1:- insllaing clerk

clerk.com ki website par jakar hume login karna hey or free mey backend ka login system lelena hey or waha se dekh ke humne uske commponent or baki setting set ki apne main.jsx or app.jsx mey.

# 2:- fetching live location

we use

:- navigator.geolocation.getCurrentPosition(async function(){}):

navigator.geolocatino.getCurrentPosition hume latitude and longitude deta hey usko hum nominate api se live location mey convert karte hey.

this is nominatim api isme humne lat=${latitude diya} or lon=${longitude} diye is url ko axios ka use karke iske value ko useState hook mey set kar diya

const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

the work we do in app

const getLocation = () => {
navigator.geolocation.getCurrentPosition(async function (pos) {
const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const exectLocation = await axios.get(url);
        setlocation(exectLocation.data.address);
      } catch (error) {
        console.log(`lo bhai aa gyi error : ${error}`);
      }

      console.log(url);
    });

};

useEffect(() => {
// getLocation();
}, []);

# 3 :- i install 2 icons

1-npm i lucide-react
2-npm i react-icons

# 4:- i use browser routes

browser router ek page se dusre page bina reloading huwe jana hey

iske liye insall kiya :- npm i react-router-dom

feer main.jsx mey app ko browser router se wrap kiya
<BrowserRouter>
<App/>
<BrowserRouter/>

app mey

 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
</Routes>

Navbar mey

Navlink use link create karne or {isAcitve } ka use karne ke liye isActive se hum jis page par hey us link ke style mey change kar sakte hey .

<NavLink
to={"/"}
className={({ isActive }) =>
`${isActive ? "border-b-3 border-red-500 transition-all tranistion-all " : "text-black"}cursor-pointer`
} >
home
</NavLink>

Link sirf a tag ki tarah kaam karta hey . bina reload ke.

 <Link to={"/cart"} className=" relative  ">
<IoCartOutline className="h-7 w-7" />{" "}
<span className="bg-red-500 px-2 rounded-full absolute -top-3 -righttext-white">
  0
 </span>
</Link>
