"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const CatImage = styled.img`
  width: 401px;
  height: 217px;
  border-radius: 10px;
`;

const CatName = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #006E0FFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7BFF6FFF;
  }
`;

const CatPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const catImageUrl = searchParams.get('catImageUrl');

  return (
    <Container>
      {catImageUrl ? (
        <>
          <CatImage src={catImageUrl} alt="Imagem de um gatinho" width={401} height={217} />
          <CatName>Nome: Funny</CatName>
        </>
      ) : (
        <p>Imagem não encontrada.</p>
      )}
      <Button onClick={() => router.back()}>Voltar</Button>
    </Container>
  );
};

export default CatPage;
