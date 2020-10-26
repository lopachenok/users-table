import React, {FunctionComponent} from "react";

import {CheckboxContainer, HiddenCheckbox, StyledCheckbox} from "./styles";

type CheckBoxProps = {
  checked?: boolean;
  onChange?: () => void;
};

export const Checkbox: FunctionComponent<CheckBoxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox onChange={onChange} checked={checked} />
      <StyledCheckbox checked={checked || false} />
    </CheckboxContainer>
  );
};
