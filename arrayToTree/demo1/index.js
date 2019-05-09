var list = [{
  id: '1',
  name: '1',
  pId: '0'
}, {
  id: '1-1',
  name: '1-1',
  pId: '1'
}, {
  id: '1-1-1',
  name: '1-1-1',
  pId: '1-1'
}, {
  id: '1-1-2',
  name: '1-1-2',
  pId: '1-1'
}, {
  id: '1-1-3',
  name: '1-1-3',
  pId: '1-1'
}, {
  id: '1-2',
  name: '1-2',
  pId: '1'
}, {
  id: '1-2-1',
  name: '1-2-1',
  pId: '1-2'
}, {
  id: '1-2-2',
  name: '1-2-2',
  pId: '1-2'
}, {
  id: '2',
  name: '2',
  pId: '0'
}, {
  id: '2-1',
  name: '2-1',
  pId: '2'
}, {
  id: '2-2',
  name: '2-2',
  pId: '2'
}]

function arrayToTree(data, pId) {
  const tmp = [];
  Array.from(data).forEach(function(record) {
    if (record.pId === pId) {
      const children = arrayToTree(data, record.id);
      if (children.length) {
        record.children = children;
      }
      tmp.push(record);
    }
  })
  return tmp;
}
console.log(arrayToTree(list, list[0].pId))