import styled from "styled-components"
import { rem } from "../../utils/helper"

export const TextInput = styled.input`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  border-radius: 8px;
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.dark};
  border: 2px solid transparent;
  outline: 0;
  box-sizing: border-box;
  transition: border-color 0.2s ease-in-out;
  cursor: text;

  &:focus {
    color: ${p => p.theme.colors.light};
    border-color: ${p => p.theme.colors.main};
  }

  &::placeholder {
    color: ${p => p.theme.colors.light};
  }
`

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  margin: ${p => p.theme.spacing.medium} 0;

  & > input {
    margin-right: 10px;
  }
`

export const Button = styled.button`
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  background-color: ${p => p.theme.colors.dark};

  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
  border: none;
  border-radius: 8px;
  outline: 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.main};
  }
`
