import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: start;
align-items: auto;
align-content: start
`;

const ProductListItems = styled.div`
flex: 0 0 auto;
margin: 10px;
`;

const Orders: React.FC = () => {
    return (
        <Container>
          {/* <Navbar /> */}
          <ProductListItems>
          </ProductListItems>
        </Container>
      );
};


export default Orders;