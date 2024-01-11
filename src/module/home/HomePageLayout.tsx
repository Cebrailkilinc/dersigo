"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
const HomePageLayout = () => {

  const apiEndpoint = 'https://dummyapi.io/data/v1/user?limit=100';
  const apiKey = '659fe7306a65d9e6a137f65d'; // Bu kısmı kendi API anahtarınızla değiştirmeniz gerekiyor

  useEffect(() => {
    axios.get(apiEndpoint, {
      headers: {
        'app-id': apiKey
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [])
  return (
    <div>HomePageLayout</div>
  )
}

export default HomePageLayout