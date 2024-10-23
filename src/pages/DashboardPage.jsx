import { Card, Row, Col, Statistic } from 'antd';
import { DashboardOutlined, UserOutlined, ToolOutlined } from '@ant-design/icons';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Active Users"
              value={112}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Tools"
              value={93}
              prefix={<ToolOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="System Status"
              value="Normal"
              prefix={<DashboardOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;