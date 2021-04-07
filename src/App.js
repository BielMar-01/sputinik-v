import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="b4ffc51a-75d2-49db-bf04-e0c61626c750"
      userName="Adm"
      userSecret="root" 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;