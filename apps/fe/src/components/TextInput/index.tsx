import {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { FieldWrapper, Placeholder, TextAreaInput, TextInput } from './styles';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextField(props: TextFieldProps) {
  return (
    <FieldWrapper>
      <TextInput {...{ ...props, placeholder: '' }} />
      <Placeholder empty={!props.value}>
        <span>{props.placeholder}</span>
      </Placeholder>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onChange?.({
              target: {
                value: '',
              },
            } as ChangeEvent<HTMLInputElement>);
          }}
        >
          {/* <CancelIcon/> */}
          {/* <PIcon/> */}
        </button>
      </div>
    </FieldWrapper>
  );
}

export function TextArea(props: TextAreaProps) {
  return (
    <FieldWrapper>
      <TextAreaInput {...props} />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onChange?.({
              target: {
                value: '',
              },
            } as ChangeEvent<HTMLTextAreaElement>);
          }}
        >
          {/* <CancelIcon/> */}
        </button>
      </div>
    </FieldWrapper>
  );
}
