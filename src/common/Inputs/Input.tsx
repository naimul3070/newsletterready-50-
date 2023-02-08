import { Form, Input, InputNumber } from 'antd';
import React from 'react';
import './index.scss';

type paramType = {
  label?: string;
  name: string;
  defaultValue?: any;
  className?: string;
  type?: 'number' | 'text' | 'email';
  rules?: [{ required: boolean; message?: string }] | {}[];
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: any) => void;
  disabled?: any;
  checkboxText?: string;
  valuePropName?: string;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  min?: number;
  max?: number;
  checked?: boolean;
  onOpenChange?: (open: any) => any;
  onPanelChange?: (value: any, mode: any) => any;
  disabledDate?: any;
  picker?: 'week' | 'quarter' | 'month' | 'year';
  format?: string;
  allowClear?: true | false;
  onWheel?: any;
  ref?: any;
};

const conditionalRenderFunc = (props: paramType) => {
  switch (props?.type || '') {
    case 'number':
      return (
        <InputNumber
          className="w-full rounded"
          placeholder={props?.placeholder ? props?.placeholder : props?.label}
          maxLength={props?.maxLength}
          onChange={props?.onChange}
          defaultValue={props?.defaultValue ? props?.defaultValue : undefined}
          disabled={props?.disabled}
          min={props?.min || 0}
          max={props?.max || undefined}
          prefix={props?.prefix}
          type="number"
          onWheel={props?.onWheel}
        />
      );

    default:
      return (
        <Input
          placeholder={props?.placeholder ? props?.placeholder : props?.label}
          maxLength={props?.maxLength}
          onChange={props?.onChange}
          className="rounded"
          defaultValue={props?.defaultValue ? props?.defaultValue : undefined}
          disabled={props?.disabled}
          prefix={props?.prefix}
          suffix={props?.suffix}
        />
      );
  }
};

export const NEWInput: React.FC<paramType> = (props) => {
  return (
    <div className="NEWInputWrapper">
      <Form.Item
        label={props?.label}
        name={props?.name}
        rules={props?.rules}
        valuePropName={props?.valuePropName}
      >
        {conditionalRenderFunc(props)}
      </Form.Item>
    </div>
  );
};
/// =============example =====
// <NEWInput
// label="Username"
// name="username"
// rules={[{ required: true, message: 'User name is required' }]}
// />
