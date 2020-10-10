import React, { Component } from 'react';
import axios from 'axios';
import imageApi from './api/imageApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    page: 1,
    showModal: false,
    originalImageURL: null,
    error: null,
  };
}
