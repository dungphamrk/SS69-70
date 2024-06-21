import React from 'react';

interface NotificationProps {
  message: string;
  isError?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, isError }) => (
  <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert" id="mnotification">
    {message}
  </div>
);

export default Notification;
