import React from "react";

 const  Cardplan =function ({ plans }) {

  
  return (
    <div className="plancontainer" >
      {plans.map((plan, index) => (
        <div key={index} className="card" >
           <a href={plan.link}>
          <img src={plan.img} class="card-img-top" /></a> 
          <div class="card-body">
            <h5 class="card-title">{plan.title}</h5>
            <p class="card-text">
              {plan.description}
            </p>
            <a href="#" class="btn btn-primary">
              {plan.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default  Cardplan;
