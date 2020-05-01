import React from 'react'
import { Layout, Menu,  Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function HeaderComponent(){
    return(
        <Layout>
            <Header className="header">
                <Row>
                    <Col span={10}> <div className="logo"><Link to="/">Machine Learning for Kids</Link></div></Col>
                    <Col span={14} style={{textAlign:"right"}}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/">Anasayfa</Link></Menu.Item>
                            <Menu.Item key="2">Acemi</Menu.Item>
                            <Menu.Item key="3">Orta Düzey</Menu.Item>
                            <Menu.Item key="4">İleri Seviye</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                
               
            </Header>
        </Layout>
    )
}

export default HeaderComponent