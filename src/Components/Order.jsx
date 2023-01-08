import React from "react";

const order = () => {


  return (
    <div className="order">
      <main>
        <h1>Order Now!</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Requirement</label>
            <input
              type="text"
              required
              placeholder="Enter the service you need..."
            />
            {/* Add field to place order and show its value on screen */}
            
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default order;