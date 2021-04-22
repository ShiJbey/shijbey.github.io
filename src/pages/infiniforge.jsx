import * as React from 'react';
import ReactDom from 'react-dom';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';
import '../infiniforge_app';

(() => {
  ReactDom.render(<Toolbar />, document.getElementById('toolbar'));
  ReactDom.render(<Footer />, document.getElementById('footer'));
})();
