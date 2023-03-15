export function checkTargetsInList(list, targets) {
  return list.find(v => {
    return targets.includes(v)
  })
}

// 将list不重复地添加到targets
export function putListInTargetsOnly(list, targets) {
  list.forEach(v => {
    // console.log(targets)
    targets.includes(v) || targets.push(v)
  })

  return targets
}

// 在targets中移除所有list的内容
export function getListOutTargetsAll(list, targets) {
  list.forEach(v => {
    let index = targets.indexOf(v)
    while(index != -1) {
      targets.splice(index, 1)
      index = targets.indexOf(v)
    }
  })

  return targets
}