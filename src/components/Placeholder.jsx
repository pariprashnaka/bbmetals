import React from 'react';

const CameraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24">
    <path d="M12 15.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm0-8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zM20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
  </svg>
);

export default function Placeholder({ label = 'Add photo here', style = {} }) {
  return (
    <div className="ph" style={{ minHeight: 240, ...style }}>
      <div className="ph-icon"><CameraIcon /></div>
      <div className="ph-label">{label}</div>
      <div className="ph-tag">Photo placeholder</div>
    </div>
  );
}
