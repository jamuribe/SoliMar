import { IP_ADDRESS } from '@env'

const Data = async () => {
  try {
    const discover = await fetch(IP_ADDRESS)
    const data = await discover.json();
    return data;
  } catch (e) {
    console.log('this is an error ', e)
  }
}

module.exports = Data;
