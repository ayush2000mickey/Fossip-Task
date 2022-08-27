import chessePizzaImg from "../../Images/cheese burst pizza.png";
import cornPizzaImg from "../../Images/corn pizza.png";
import pastaImg from "../../Images/pasta.png";
import vegBurgerImg from "../../Images/veg burger.png";
const UserOrderDetails = {
  userDetails: {
    userName: "Something",
    userAddress: "U7/34 , LA",
    userOrderId: "ASDF3543",
    userMobileNumber: "5646747455",
  },
  orderedItems: [
    {
      id: 1,
      dishImg: chessePizzaImg,
      dishName: "Cheese Burst Pizza",
      dishContents: "Garlic Breadstix , Jalepen",
      dishQuantity: 1,
      dishPrice: 120,
    },
    {
      id: 2,
      dishImg: cornPizzaImg,
      dishName: "Corn Pizza",
      dishContents: "French Fries, Mayonnaise",
      dishQuantity: 4,
      dishPrice: 100,
    },
    {
      id: 3,
      dishImg: pastaImg,
      dishName: "Pasta",
      dishContents: "Garlic Breadstix, Jalepen",
      dishQuantity: 2,
      dishPrice: 125,
    },
    {
      id: 4,
      dishImg: vegBurgerImg,
      dishName: "Veg Burger",
      dishContents: "French Fries, Mayonnaise",
      dishQuantity: 3,
      dishPrice: 200,
    },
  ],
};

export default UserOrderDetails;
