import koi from "./folder_vo/ten_day_du";
import { y, lk } from "./folder_vo2/tinh_so_nhan";
import { info_v } from "./info_vo";
let sonhan=prompt("Viết số nhân: ");
let sobinhan=prompt("Viết số bị nhân: ");
document.getElementById("volevan").innerHTML = koi();
document.getElementById("sonhan").innerHTML = lk("Tích của "+sonhan+" và "+sobinhan+" là: ") + y(sonhan, sobinhan);
// document.getElementById("info_vo").innerHTML = info_v().toString();
console.log(info_v());
let get_all_vo=info_v();
for(let i=0;i<info_v.length;i++){
    get_all_vo+=("Số"+i);
}
document.querySelector("#info_vo").innerHTML =get_all_vo;
