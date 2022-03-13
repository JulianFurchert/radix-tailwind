import React from 'react';

type TestComponentProps = {
  example: string;
}

export const TestComponent: React.FC<TestComponentProps> = (props) => {
  return <div>{props.example}</div>
}