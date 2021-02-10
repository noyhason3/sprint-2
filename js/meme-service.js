'use strict';
let gNextId = 1;
let gKeywords = { happy: 11, pet: 2 };
let gImgs = [];

let gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,

  lines: [
    {
      txt: 'first line',
      size: 30,
      align: 'left',
      color: 'red',
    },
    {
      txt: 'second line',
      size: 30,
      align: 'left',
      color: 'red',
    },
  ],
};


function setSelectedLineIdx(idx){
  gMeme.selectedLineIdx=idx;
  console.log(gMeme.selectedLineIdx);

}

function switchLines(){
  let firstLine = gMeme.lines[0];
  let secondLine = gMeme.lines[1];
  gMeme.lines[0] = secondLine
  gMeme.lines[1] = firstLine
  // gMeme.lines.splice(0,1,secondLine)
  // gMeme.lines.splice(1,1,firstLine)
  
  console.log(gMeme);
  

console.log(gMeme.lines[0]);
}

function setMemeId(imgId){
  gMeme.selectedImgId = imgId;
}

function setTxtPos(diff){
  let idx = gMeme.selectedLineIdx;
  gMeme.lines[idx].pos-=diff
}

function setTxtSize(diff){
  let idx = gMeme.selectedLineIdx;
  gMeme.lines[idx].size+=diff
}

function setTxt(txt, idx){
   gMeme.lines[idx].txt=txt;
}

function getMeme(){
  return gMeme;
}



function getImg(imgId){
  return gImgs.find(img=>{
    return (img.id===imgId)
  })
}


function getImgs() {
  return gImgs;
}













function _createImg() {
  let img = { 
    id: gNextId, 
    url: `imgs/${gNextId}.jpg`, 
    keywords: ['img'] 
  };
  gNextId++;
  return img;
}

function _createImgs(count){
  for (let i=0; i<count; i++){
    gImgs.push(_createImg());
  }
}
