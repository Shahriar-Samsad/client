import { useState } from "react";

const Product = () => {
    const [data,setData] = useState("mango")
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl my-5  ">our product</h1>
        <div className="flex mb-7">
          <button className="hover:underline uppercase mx-3" onClick={(e)=>setData("mango")}>mango </button>
          <button className="hover:underline uppercase mx-3" onClick={(e)=>setData("lichi")}>lychee</button>
          <button className="hover:underline uppercase mx-3" onClick={(e)=>setData("exotic")}>exoiotic fruits </button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {[1, 2, 4, 5].map((item, index) => (
         <>
          {data==="mango"&&<Mango key={index} data={data} /> }
          {data==="lichi"&&<Mango key={index} data={data} /> }
          {data==="exotic"&&<Mango key={index} data={data} /> }
          </>
        ))}
      </div>
      <div className="relative my-5 overflow-hidden">
          <img src="/am.jpg" className="w-1/2 h-72  hover:scale-125 transition-transform transition-500" alt="loading..." />
          <div className="absolute text-black top-8 left-4">
            <div className="text-white ">
                <h1 className="text-2xl my-5">new product</h1>
              <h1 className="text-5xl my-5">this isdf</h1>
              <p className="text-2xl mb-3">thisidfsdf</p>
            </div>
            <button className="bg-black text-white p-5 font-bold rounded-lg">
              confirm item
            </button>
          </div>
        </div>
    </div>
  );
};

export default Product;
const Mango = ({data}) => {
  return (
    <div className="p-5 border-2 mx-2">
      <div className="relative hover:overflow-hidden">
        <img
          src="/am.jpg"
          className="w-full h-48 hover:scale-125 transition-transform transition-500"
        />
        <span className="rounded-full absolute top-1 left-1 bg-red-700 text-white border-2 py-7 p-2">
          sold out
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h1>name {data}</h1>
        <p className="text-green-400">prrice 12000-20000</p>
      </div>
    </div>
  );
}; 