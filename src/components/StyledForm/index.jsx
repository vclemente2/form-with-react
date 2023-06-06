import styled from "styled-components";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  min-width: fit-content;
  padding: 1rem 2rem;
  width: 50vw;

  & span {
    margin: auto;
  }
`;

export default StyledForm;
