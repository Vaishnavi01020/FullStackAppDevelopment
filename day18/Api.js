import React from 'react';
import { json } from 'react-router-dom';
import axios from 'axios';
const url='http://localhost:8181'
const authHeader=localStorage.getItem('token');
const headers={'Authorization':`Bearer ${authHeader}`,
'Content-Type':'application/json'

}
//Authentication
export const loginSer=(data)=>axios.post(`${url}/api/v1/auth/login`,data);
export const register=(data)=>axios.post(`${url}/api/v1/auth/register`,data);

//ArtWork
//const saveartwork=(data)=>axios.post(`${url}/api/v1/artwork/saveartwork`,data,headers);
export const postArt=()=>axios.get(`${url}/api/v1/user/all`,headers);
export const getId=(id)=>axios.get(`${url}/api/v1/user/${id}`,headers);
//export const getId=()=>axios.get(`${url}/api/v1/artwork/id=${id}`,headers);
//export const update=(id)=>axios.put(`${url}/api/v1/artwork/${id}`,data,headers);
export const deletee=(id)=>axios.delete(`${url}/api/v1/user/delete/${id}`,headers);
