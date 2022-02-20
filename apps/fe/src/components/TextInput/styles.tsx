import styled, { css } from 'styled-components/macro';

export const Placeholder = styled.div<{ empty: boolean }>`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    margin-left: 1.5rem;
    > span {
      background-color: rgba(255, 255, 255, 0);
      transition: background-color 0.2s;
      color: #666666;
    }
    ${(p) =>
      p.empty
        ? css<{}>`
            > span {
              background-color: rgba(255, 255, 255, 0);
            }
            transform: translate(0, 0%) scale(1);
          `
        : css<{}>`
            > span {
              background-color: rgba(255, 255, 255, 1);
            }
            transform: translate(0, -50%) scale(0.8);
          `};
    transform-origin: left center;
    transition: transform 0.2s;
    box-sizing: content-box;
    align-items: center;
    display: flex;
    pointer-events: none;
  `,

  FieldWrapper = styled.div`
    height: 100%;
    width: 100%;
    color: grey;
    position: relative;
    transition: transform 0.2s;
    transform: translate(0px, 0px);
    :focus-within ${Placeholder} {
      > span {
        background-color: rgba(255, 255, 255, 1);
      }
      transform: translate(0, -50%) scale(0.8);
    }
    > label:nth-child(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      pointer-events: none;
      > svg {
        margin-left: 0.5rem;
      }
    }
    > div:last-child {
      position: absolute;
      top: 0px;
      right: 5px;
      height: 100%;
      width: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      display: flex;
      > button {
        width: 16px;
        height: 16px;
        background: none;
        outline: none;
        border: none;
        border-radius: 8px;
        align-self: flex-start;
        margin-top: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > svg {
          margin: 0;
          position: absolute;
          left: 0px;
          circle {
            transition: fill 0.2s;
          }
          :hover {
            circle {
              fill: #e0e8f0;
            }
          }
          :active {
            circle {
              fill: #b8c6d4;
            }
          }
        }
      }
    }
  `,
  
  InputStyle = css<{}>`
    height: 100%;
    width: 100%;
    padding: 1rem 2.5rem 1rem 1.5rem;
    background-color: white;
    border-radius: 3px 3px 3px 3px;
    border: none;
    transition: border-radius 0.2s;
    outline: none;
    border: 1px solid #8b8b8b;
    :hover {
      background-color: #f7f9fb;
      border: 1px solid #5f5f5f;
    }
    &:focus {
      border: 1px solid #4d4d4d;
      color: black;
      :hover {
        background-color: #ffffff;
      }
    }
  `,
  TextInput = styled.input`
    ${InputStyle}
  `,
  TextAreaInput = styled.textarea`
    ${InputStyle}
  `;
