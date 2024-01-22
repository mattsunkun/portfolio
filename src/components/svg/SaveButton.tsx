import { Button } from '@mui/material';
import React from 'react';

type tSaveButton = {
  svgContent: string;
  filename?: string;
}

const SaveButton: React.FC<tSaveButton> = ({ svgContent, filename }) => {
  const handleSave = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'image.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button onClick={handleSave}>
        Save SVG
      </Button>
    </>
  );
};

export default SaveButton;
