const Main = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.number + 1) +
          ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
};

//   return (
//     <div className="row">
//       <div className="col-4">
//         <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
//         <h4>{shoes[0].title}</h4>
//         <p>{shoes[0].content}</p>
//       </div>

//       <div className="col-4">
//         <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
//         <h4>{shoes[1].title}</h4>
//         <p>{shoes[1].content}</p>
//       </div>

//       <div className="col-4">
//         <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
//         <h4>{shoes[2].title}</h4>
//         <p>{shoes[2].content}</p>
//       </div>
//     </div>
//   );

export default Main;
