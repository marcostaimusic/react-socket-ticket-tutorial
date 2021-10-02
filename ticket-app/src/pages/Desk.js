import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, CaretRightOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export const Desk = () => {
  const exit = () => {
    console.log("exit");
  };

  const nextTicket = () => {
    console.log("next ticekt");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Tom</Title>
          <Text>You are working with desk: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col>
          <Text>Ticket being served: </Text>
          <Text type="success" style={{ fontSize: 30 }}>
            22
          </Text>
        </Col>
      </Row>
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
