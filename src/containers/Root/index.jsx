import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Breadcrumb from 'components/Breadcrumb';
import routes from 'config/router.config';
import React, { Component } from 'react';
import Header from 'containers/Header';
import Menu from 'components/Menu';
import NoMatch from 'pages/404';
import { Layout } from 'UI';
import './index.less';

const { Content, Sider } = Layout;

export default class Root extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Router>
        <Layout>
          <Sider
            onCollapse={this.toggle}
            collapsed={collapsed}
            collapsible
            width={230}
          >
            <div className="logo">{__APP_NAME__}</div>
            <Menu />
          </Sider>
          <Layout className="root-container">
            <Header />
            <Content style={{ padding: 30, backgroundColor: '#f0f0f0', overflow: 'auto' }}>
              {/* <Breadcrumb /> */}
              <Switch>
                {routes.map(route => (
                  <Route
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                    key={route.name}
                  />
                ))}
                <Route component={NoMatch} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}