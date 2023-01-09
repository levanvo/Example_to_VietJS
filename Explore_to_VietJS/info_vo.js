const k={
    name: "Văn Võ đẹp troai",
    age:{
        age1:22,
        age_nextyear:23,
    },
    address:"Thanh Hóa",
}
const {
    name:myname,
    age:{
        age1:age_reality,
        age_nextyear:age_future,
    },
    address,
}=k
const info_v=()=>{
    return [
      "<br><span class='text-yellow-500'>Tên: </span>" + myname,
      "<br><span class='text-yellow-500'>Tuổi hiện tại: </span>" + age_reality,
      "<br><span class='text-yellow-500'>Tuổi tương lai: </span>" + age_future,
      "<br><span class='text-yellow-500'>Quê: </span>" + address,
    ];
};
export {info_v};
