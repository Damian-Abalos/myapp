// import React, {setTimeout,useEffect, useState} from "react";

// const MiPromise = () => {

//   const [result, setResult] = useState (null)

//   // const tarea = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve([
//   //       {
//   //         id: 1,
//   //         title: "hamburguesa"
//   //       },
//   //       {
//   //         id: 2,
//   //         title: "pizza"
//   //       },
//   //       {
//   //         id: 3,
//   //         title: "papas fritas"
//   //       },
//   //       {
//   //         id: 4,
//   //         title: "empanadas"  
//   //       }
//   //     ]);
//   //   }, 3000);
//   // });

//   // useEffect(() => {
      
//   //       if(!result){
//   //           tarea.then((res,err) => {
//   //               if (err) console.log(err)
//   //               setResult(res)
//   //           }).catch((error) => {
//   //               console.log(error)
//   //           }).finally(()=> console.log("Finalizado"))
//   //       }
//   //     return () => {
//   //         console.log(result)
//   //     }
//   // }, [result])

//   // const getItems = async () => {

//   //   try {
//   //     const resultado = await
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   const tarea = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve([
//             {id:1,name:"Iphone 6",descripcion:"Celular",stock:10 ,img:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png"},
//             {id:2,name:"Samsung S21",descripcion:"Celular",stock:3, img:"https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg"},
//             {id:3,name:"Alcatel 1V",descripcion:"Celular",stock:6,img:"https://i.blogs.es/6947e3/alcatel1v2020/450_1000.jpg"},
//             {id:4,name:"Iphone XS",descripcion:"Celular",stock:4,img:"https://m.media-amazon.com/images/I/81wcv7XP3cL._AC_SL1500_.jpg"}
//         ])
//     }, 3000);
// })
// useEffect(() => {
//     if(!result){
//         tarea.then((res,err) => {
//             if (err) console.log(err)
//             setResult(res)
//         }).catch((error) => {
//             console.log(error)
//         }).finally(()=> console.log("Finalizado"))
//     }
//     console.log(result)
// }, [result])


//   return <div></div>;
// };

// export default MiPromise;
