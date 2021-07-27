import React, { useEffect, useState } from 'react';
import Data from '../../sevices/apiServices';
import List from '../list/list';


export default function dashboard() {
  const [beaches, setBeach] = useState([]);

  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    Data().then(info => {
      setBeach(info.state.beaches)
    })
  }

  return (
    <List beaches={beaches}></List>
  )
}
