
import React from "react";
import style from "../productImgDiv/productImgDiv.module.css";
import PropTypes from "prop-types";



 
      const dataCards = [
        {
          textImage: "Latte",
          linkImage:
            "https://www.foodiesfeed.com/wp-content/uploads/2023/04/coffee-with-amazing-latte-art.jpg",
        },
        {
          textImage: "Cappucino",
          linkImage:
            "https://media.istockphoto.com/id/1130315137/photo/cup-of-cappuccino-coffee.jpg?s=612x612&w=0&k=20&c=L2OrThNrUWtfThYPBeyyyEhc4b1VwC6hzk1Yj1x4IJI=",
        },
        {
          textImage: "Espresso",
          linkImage:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXNwcmVzc28lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        },
        {
          textImage: "Macchiato",
          linkImage:
            "https://media.istockphoto.com/id/625298412/photo/latte-macchiato-coffee.jpg?s=170667a&w=0&k=20&c=Ygy51WLVpAPbhEOMZGxREpP7qI6Ojz8I1S0TkABYuYw=",
        },
        {
          id: 4,
          textImage: "Mocha",
          linkImage:
            "https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1",
        },
      ];

export class ProductImgDiv extends React.Component {
  
 
  static defaultProps = {
  textButton: "Click",
};
  
constructor() {
  super();
  this.state = {
    count: 0,
  };
}
  
  render() {


    const addOrder = () => {
      this.setState({count: this.state.count + 1})
    }
    
    const removeOrder = () => {
      this.setState({ count: (this.state.count - 1) });
    };

    console.log("this ", this);



      return (
        <div className={style.productImgDiv}>
          {dataCards.map((item, index) => (
            <div key={index} className={style.productImage}>
              <img src={`${item.linkImage}`} alt={item.textImage} />
              <p>{item.textImage}</p>
              <button onClick={addOrder}>{this.props.textButton + " +"}</button>
              <button onClick={removeOrder}>{this.props.textButton + " --"}</button>
              <p>Count: {this.state.count}</p>
            </div>
          ))}
        </div>
      );
  }
}



ProductImgDiv.propTypes = {
  textImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  linkImage: PropTypes.string.isRequired,
};


