function getFirstSelector(selector){
  document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested.target')
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode node.children[0]

  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

    for 
       (let  i = 0, l = ranked-list.lenght; i< l ; i++){
        let children = ranked-list[i].children
            for (let n = 0, f = children.length; n < f; n++){
              children[n].innerHTML = parseInt(children[n].innerHTML + n)
          }
     } 
}