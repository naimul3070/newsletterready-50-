import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { Col,  Layout, Row } from 'antd';

const { Header } = Layout;

type indexType = {};
const Home: React.FC<indexType> = () => {


  useEffect(() => {
  }, []);
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Header
          style={{
            padding: '0px',
            backgroundColor: 'white',
          }}
        >
          <div className="bg-white h-6 ">
            <Navbar
            />
          </div>
        </Header>
        <Row className="mt-4 w-full" justify="center">
          <Col lg={15}  className=''>
          </Col>
          <Col className="mt-4" lg={15}>

          </Col>
        </Row>

      </Layout>
    </>
  );
};

export default Home;
