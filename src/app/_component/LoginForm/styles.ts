'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  min-width: 300px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .loginBtn {
    margin-top: 24px;
  }
`;

const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export { Wrapper, FormContainer, LoginTitle };
