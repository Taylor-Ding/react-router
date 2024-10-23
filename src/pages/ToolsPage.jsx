import { Button } from 'antd';
import AuthButton from '../components/AuthButton';

const ToolsPage = () => {
  return (
    <div>
      <h1>Tools Management</h1>
      
      <AuthButton permission="system.tool.view">
        <Button type="primary">
          View Tools
        </Button>
      </AuthButton>

      <AuthButton permission="system.tool.edit">
        <Button type="primary" style={{ marginLeft: '10px' }}>
          Edit Tools
        </Button>
      </AuthButton>
    </div>
  );
};

export default ToolsPage;