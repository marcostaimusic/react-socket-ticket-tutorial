import React, { useState, useContext } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { Redirect, useHistory } from "react-router";
import { SocketContext } from "../context/SocketContext";
const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);

  const [user] = useState(getUserStorage);
  const history = useHistory();
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const exit = () => {
    localStorage.clear();
    history.replace("/enter");
  };

  const nextTicket = () => {
    socket.emit("nextTicket", user, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!user.agent || !user.desk) {
    return <Redirect to="/enter" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working with desk: </Text>
          <Text type="success">{user.desk}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>

      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>Ticket being served: </Text>
            <Text type="success" style={{ fontSize: 30 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <CaretRightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
