import React from 'react';
import { Layout, Menu} from 'antd';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {MainPage} from "./Components/MainPage";
import {PageAbout} from "./Components/PageAbout";

const {Header, Content, Footer} = Layout

class App extends React.Component{
    render() {
        let path = this.props.location.pathname;
        let selectedKey;
        if (path === '/') {
            selectedKey = ['1'];
        } else if (path === '/about') {
            selectedKey = ['2'];
        } else {
            throw new Error("Unexpected path!")
        }

        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKey}>
                        <Menu.Item key="1">
                            <Link to='/'>Главная</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/about'>О нас</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div className="main-container">
                        <Switch>
                            <Route path='/about'>
                                <PageAbout/>
                            </Route>
                            <Route path='/'>
                                <MainPage/>
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Nikita Ivanin from MIPT ©2021 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default withRouter(App);
