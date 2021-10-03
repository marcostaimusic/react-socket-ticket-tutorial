import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
const { Title, Text } = Typography;

export const CreateTicket = () => {
  useHideMenu(true);

  const newTicket = () => {
    console.log("ticket");
  };

  return (
    <>
      <Row>
        <Col span={14} offset={5} align="center">
          <Title level={3}>Press button to create a new ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined size="large" onClick={newTicket} />}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={5} align="center">
          <Text level={2}>Your number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            343
          </Text>
        </Col>
      </Row>
    </>
  );
};
