import './App.css';
import { useEffect } from 'react';
import { Layout, Breadcrumb, Row, Col, TimePicker } from 'antd';
import { headerStyle } from './components/styles';
import dayjs from 'dayjs';

const { Header, Footer, Content } = Layout;

const format = "HH:mm";

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
        <Row justify="center">
          <Col xs={{ span: 11, offset: 1 }}>
            <TimePicker defaultValue={dayjs('19:00', format)} format={format}/>
          </Col>

          <Col xs={{ span: 11, offset: 1 }}>
            <TimePicker defaultValue={dayjs('19:00', format)} format={format}/>
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
