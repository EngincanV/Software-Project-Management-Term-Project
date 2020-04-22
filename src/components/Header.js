import React from 'react'
import { Layout, Menu,  Row, Col } from 'antd';

const { Header, Content, Sider } = Layout;

function HeaderComponent(){
    return(
        <Layout>
            <Header className="header">
                <Row>
                    <Col span={6}> <div className="logo">Machine Learning for Kids</div></Col>
                    <Col span={18} style={{textAlign:"right"}}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Anasayfa</Menu.Item>
                            <Menu.Item key="2">Acemi</Menu.Item>
                            <Menu.Item key="3">Orta Düzey</Menu.Item>
                            <Menu.Item key="3">İleri Seviye</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                
               
            </Header>
        </Layout>
    )
}

export default HeaderComponent