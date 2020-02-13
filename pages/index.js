import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const Home = () => <Admin dataProvider={dataProvider} />;

export default Home
