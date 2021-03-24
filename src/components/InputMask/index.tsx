import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import MaskedInput, { Props } from 'react-input-mask';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error, Content } from '../Input/styles';

interface InputProps extends Props {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
}

const InputMask: React.FC<InputProps> = ({
  name,
  icon: Icon,
  id,
  label,
  ...rest
}) => {
  const inputRef = useRef<MaskedInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.state);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}

        <MaskedInput
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        {error && (
          <Error>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Content>
      {error && <span>{error}</span>}
    </Container>
  );
};

export default InputMask;
