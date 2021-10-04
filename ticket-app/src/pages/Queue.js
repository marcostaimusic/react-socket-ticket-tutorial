import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, List, Button, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { getLastTickets } from "../helpers/getLastTickets";

const { Title, Text } = Typography;

export const Queue = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("newTicketAssigned", (tickets) => {
      setTickets(tickets);
    });
    return () => {
      socket.off("newTicketAssigned");
    };
  }, [socket]);

  useEffect(() => {
    getLastTickets().then(setTickets);
  }, []);

  return (
    <>
      <Title level={1}>We are serving client N.</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(tickets) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{tickets.agent}</Tag>,
                    <Tag color="magenta">{`Desk N. ${tickets.desk}`}</Tag>,
                  ]}
                >
                  <Title>N. {tickets.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>List</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(tickets) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket n. ${tickets.number}`}
                  description={
                    <>
                      <Text type="secondary">Go to desk</Text>
                      <Tag color="magenta">{tickets.desk}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano">{tickets.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
