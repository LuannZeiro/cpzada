"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #008514FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #58FF6EFF;
  }
`;

const Home: React.FC = () => {
  const router = useRouter();
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null);

  const fetchCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/14u');
      const data = await response.json();
      setCatImageUrl(data.url);
      router.push(`/PaginaGato?catImageUrl=${encodeURIComponent(data.url)}`);
    } catch (error) {
      console.error("Erro ao buscar gatinho:", error);
    }
  };

  return (
    <Container>
      <Button onClick={fetchCatImage}>Buscar Gatinho</Button>
    </Container>
  );
};

export default Home;
