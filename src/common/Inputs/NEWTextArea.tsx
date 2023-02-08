import { Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

type NEWTextAreaTypes = {
  rows?: number;
  value?: any;
  showCount?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  maxLength?: number;
  autoSize?: boolean | { minRows: number; maxRows: number };
  required?: boolean;
  onChange?: (e: any) => any;
  onPressEnter?: (e: any) => any;
  onResize?: (e: any) => any;
  label?: string;
  name?: string;
  rules?: {}[];
  className?: string;
  disabled?: boolean;
};
export const NEWTextArea: React.FC<NEWTextAreaTypes> = ({
  rows,
  value,
  showCount,
  placeholder,
  defaultValue,
  maxLength,
  autoSize,
  required,
  onChange,
  onPressEnter,
  onResize,
  label,
  name,
  rules,
  className,
  disabled,
}) => {
  return (
    <>
      <div className="RMG_Text_Area">
        <Form.Item
          label={label}
          name={name}
          rules={rules}
          className={className}
        >
          <TextArea
            rows={rows ? rows : 2}
            value={value}
            showCount={showCount ? showCount : false}
            placeholder={placeholder ? placeholder : label}
            defaultValue={defaultValue ? defaultValue : undefined}
            maxLength={maxLength ? maxLength : undefined}
            autoSize={autoSize ? autoSize : undefined}
            required={required ? required : undefined}
            onChange={onChange ? onChange : undefined}
            onPressEnter={onPressEnter ? onPressEnter : undefined}
            onResize={onResize ? onResize : undefined}
            disabled={disabled ? disabled : undefined}
          />
        </Form.Item>
      </div>
    </>
  );
};
