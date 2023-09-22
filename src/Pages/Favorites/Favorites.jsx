import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";


const Favorites = () => {
const [favorites,setFavorites]= useState([])

const [noData, setNoData] =  useState(false)
const [isShow, setIsShow] =  useState(false)

const handleRemove = ()=>{
    localStorage.clear()
    setFavorites([])
    setNoData(true)
}


useEffect(()=>{
    const favouriteItem = JSON.parse(localStorage.getItem("favorites"));

    if(favouriteItem){

        setFavorites(favouriteItem)
        // let total = favouriteItem.reduce((preValue,currentItem)=> preValue+currentItem,0)
    }else{
        setNoData(true)
    }
},[])

console.log(favorites);
    return (
        <div>
            <h2 className="text-3xl font-bold text-red-600 text-center pb-8">Favorites🤗</h2>
           
            
            {
               noData? <p className="text-center font-bold uppercase text-4xl py-20 text-error border rounded-xl">NO DATA FOUND</p>: 
               <div className="text-center">

                {!isShow?favorites.length >0 && <button className="btn btn-sm btn-success" onClick={handleRemove}>Delete all</button>:""}

                {/* <h2>Total Price: {total}</h2> */}
                <div className="py-6 grid grid-cols-2 px-10 items-center
                ">
                    {
                    isShow? favorites.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>):
                    favorites.slice(0,2).map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
                </div>
                {
                    favorites.length>2 &&  <button onClick={()=>setIsShow(!isShow)} className="btn btn-md btn-success">{isShow? "Show Less": "Show More"}</button>
                }
               
               </div>
            }
        </div>
    );
};

export default Favorites;