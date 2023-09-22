import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {

  const { id } = useParams();
//   console.log(id);

  const phones = useLoaderData();
//   console.log(phones.products);

  const [phone , setPhone] = useState({})
  useEffect(()=>{
    const findPhone = phones.products?.find(phone=>phone.id == id)
    setPhone(findPhone);
  },[id,phones])
  console.log(phone);
  return (
    <div>
        {
            <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        }
      
    </div>
  );
};

export default Phone;
