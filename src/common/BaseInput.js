import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '@/constants/Colors'

const BaseInput = ({ value, onChange, ...rest }) =>
  <Input {...rest} value={value} onChange={onChange} autoComplete="off" autoCapitalize="off" />

BaseInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
BaseInput.defaultProps = {
  value: ''
}
export default BaseInput

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 6px 20px;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, .4);
  border-radius: 0;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  color: white;
  background: transparent;
  &:focus {
    border-bottom: 2px solid ${PRIMARY_COLOR};
  }
`
