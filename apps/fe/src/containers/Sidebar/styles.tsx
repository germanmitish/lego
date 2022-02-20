import styled  from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  position: absolute;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 0 0 300px;
  border-radius: 1rem;
  border: 1px solid #ccc;
  height: calc(100% - 3rem);
  padding: 0 1rem;
`