// import { useState,useEffect } from "react";
// export default function Stagger(){
//      let [start,setStart] = useState(false)
//      let [count,setCount] = useState(0)
//         useEffect(()=>{
//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if(entry.isIntersecting){
//                         setStart(true)
//                         observer.disconnect()
//                     }
//                 },
//                 {threshold: 0.4}
//             )

//             if(ref.current) observer.observe(ref.current);

//             return () => observer.disconnect()
//         },[]);

//         useEffect(()=>{
//             if(!start) return

//             let startTime = null
//             let duration = 1500
//             let value = 2035
//             function animate(timeStamp){
//                 if(!startTime) startTime = timeStamp
//                 let progress = Math.min((timeStamp - startTime) / duration, 1)
//                 setCount(Math.floor(progress*value))
//                 if(progress < 1){
//                     requestAnimationFrame(animate)
//                 }

//             }

//             requestAnimationFrame(animate)

//         },[start])

//     return(
//         <div>

//         </div>
//     )
// }
