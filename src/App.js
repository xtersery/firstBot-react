import './App.css';
import { useEffect } from 'react';
import { Layout, Breadcrumb, Row, Col, Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { titleStyle, headerStyle } from './components/styles';

const { Header, Footer, Content } = Layout;


const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    // const onClose = () => {
    //     tg.close();
    // }

    return (
        <Layout className="layout">
      <Header
        style={{
          display: 'display-box',
          alignItems: 'center',
          ...headerStyle
        }}
      >
        <Row justify="center" align="middle">
          <Col xl={6} xs={12}>
            <Typography.Title level={3} style={titleStyle}>InnoBooking Bot</Typography.Title>
          </Col>
          <Col xl={2} xs={{ span: 2, offset: 10}}>
            <Button type="primary" shape="square"  icon={<CloseOutlined />}/>
          </Col>
        </Row>
        {/* <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
      </Header>
      <Content>
        <Row justify="center" align="center">
          <Col span={3}>
                <Breadcrumb
                  style={{
                    margin: '16px 0',
                  }}
                >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          </Col>

        </Row>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
    );

}

export default App;
