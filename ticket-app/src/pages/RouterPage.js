import React, { useContext } from "react";
import { UIContext } from "../context/UIcontext";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Enter } from "./Enter";
import { Queue } from "./Queue";
import { CreateTicket } from "./CreateTicket";
import { Desk } from "./Desk";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { hideMenu } = useContext(UIContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={hideMenu}>
          <div className="logo" />
          <Switch>
            <Route path="/enter">
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/queue">Queue</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/create-ticket">Create Ticket</Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/queue">
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/enter">Enter</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/create-ticket">Create Ticket</Link>
                </Menu.Item>
              </Menu>
            </Route>

            <Route path="/create-ticket">
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/enter">Enter</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/queue">Queue</Link>
                </Menu.Item>
              </Menu>
            </Route>
          </Switch>
        </Sider>

        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/enter" component={Enter} />
              <Route path="/queue" component={Queue} />
              <Route path="/create-ticket" component={CreateTicket} />
              <Route path="/desk" component={Desk} />
              <Redirect to="/enter" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

{
}
