import loadData from './load-data.js';

const loadDataList = async (array) => {

  let list = []

  for (let url of array) {
    list = [...list, await loadData(url)]
  }

  //console.log(list)

  return list

}

export default loadDataList