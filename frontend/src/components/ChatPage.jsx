import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ChatPage = () => {
  const { state } = useLocation();
  const { profileId } = useParams();
  const profile = state?.profile;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Chat with {profile?.name}</h2>
      <div className="h-[600px] bg-gray-100 rounded-lg p-4">

        
        Chat implementation placeholder
      </div>
    </div>
  );
};

export default ChatPage;