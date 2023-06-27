import React from "react";

import quotes from "../images/quotes.png";
import realtor1 from "../images/realtor-1.jpeg";
import realtor2 from "../images/realtor-2.jpeg";
import realtor3 from "../images/realtor-3.jpeg";
import user1 from "../images/user-1.jpg";
import user2 from "../images/user-2.jpg";
import user3 from "../images/user-3.jpg";
import user4 from "../images/user-4.jpg";
import user5 from "../images/user-5.jpg";
import user6 from "../images/user-6.jpg";
import user from "../images/user.jpg";


const images = {
quotes:quotes,
realtor1:realtor1,
realtor2:realtor2,
realtor3:realtor3,
user1:user1,
user2:user2,
user3:user3,
user4:user4,
user5:user5,
user6:user6,
user:user,
};

const userImg = "w-10 h-10 rounded-full ring-4 ring-purple-300"
const quote = "absolute w-1/5 right-10 top-10 lg:right-30";

const Image = (props) => {
  const { name, type } = props;
  return <img src={images[name]} className={type === 'user' ? userImg : quote} alt="selected img" />;
};

export default Image;