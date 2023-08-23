import React from 'react'
import About from './About.js';
import NavBar from './NavBar';
import Carousal from './Carousal';
import Imag from './Imag';
import Cardplan from './Cardplan';
import Hero from './Hero';
import Steps from './steps';
import Footer from './Footer'; 
import LoginForm from './LoginForm';

import AllUsers from './AllUsers';

 function Home() {
  const productItems = [
    {
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },
    {
      name: 'Laptop',
      imageSrc: "https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg",
      link: 'https://www.flipkart.com/search?q=laptop&sid=6bo%2Cb5g&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=RECENT&suggestionId=laptop%7CLaptops&requestId=dfbb676f-b193-4fd9-831d-93e143c8bb2c&as-searchtext=lap',
    },
    {
      name: 'Laptop',
      imageSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/w/r/-original-imagrs2bqaczkcty.jpeg?q=70',
      link: 'https://www.flipkart.com/search?q=laptop&sid=6bo%2Cb5g&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=RECENT&suggestionId=laptop%7CLaptops&requestId=dfbb676f-b193-4fd9-831d-93e143c8bb2c&as-searchtext=lap',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    },{
      name: 'BURGER',
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=",
      link: 'https://www.flipkart.com/mobile-phones-store',
    }
    // Add more product items
  ];

  const planItems= [
    {
      title: 'Balanced Diet Plan',
      link: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIubxjb6IfzOWRAR6E4S0lpk-940YLmE5nKA&usqp=CAU',
      description: 'This balanced diet plan includes a mix of proteins, fats, and carbohydrates to provide essential nutrients. It contains approximately 50g of protein, 70g of carbohydrates, 20g of fat, and around 600 calories per serving.'
    },
    {
      title: 'Keto Diet Plan',
      link: 'https://www.healthline.com/nutrition/ketogenic-diet-101',
      img: 'https://static.standard.co.uk/2022/04/25/09/ketocookbooks.jpg?width=1200&auto=webp&quality=75',
      description: 'The keto diet plan is low in carbohydrates and high in fats. Each serving contains about 30g of protein, 5g of carbohydrates, 50g of fat, and provides around 800 calories to support ketosis.'
    },
    {
      title: 'High-Protein Diet Plan',
      link: 'https://example.com/high-protein-diet',
      img: 'https://example.com/images/high-protein-diet.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKflc4UKazzucUHaiDs0iLail8Tsw6Igqsw&usqp=CAU',
      description: 'This high-protein diet plan is designed for muscle building. It offers approximately 60g of protein, 40g of carbohydrates, 15g of fat, and delivers around 700 calories per serving.'
    }, {
      title: 'Balanced Diet Plan',
      link: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIubxjb6IfzOWRAR6E4S0lpk-940YLmE5nKA&usqp=CAU',
      description: 'This balanced diet plan includes a mix of proteins, fats, and carbohydrates to provide essential nutrients. It contains approximately 50g of protein, 70g of carbohydrates, 20g of fat, and around 600 calories per serving.'
    },
    {
      title: 'High-Protein Diet Plan',
      link: 'https://example.com/high-protein-diet',
      img: './img/meat.jpg',
      description: 'This high-protein diet plan is designed for muscle building. It offers approximately 60g of protein, 40g of carbohydrates, 15g of fat, and delivers around 700 calories per serving.'
    }
    // You can add more plans here...
  ];
   return (
     <div>
      <Hero />


   <div className="app-container">a
      <h1 style={{color:'white'}}>Featured Products</h1>
      <Carousal items={productItems} />
    </div>

    <div className="ap">
      <h1 style={{color:'white'}}>DIET PLANS</h1>
      <div className='apcontent'><Cardplan plans={planItems}/></div>
      
    </div>
   <div className='stepcontent'><Steps/></div>
   
   <div>
       
       <LoginForm/>

   </div>
    <div>
      <Footer/>
      
    </div>
     </div>
   )
 }
 
 export default Home
 