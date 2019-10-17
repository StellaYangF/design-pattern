class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.parent = null;
  }

  add(child) {
    child.parent = this;
    this.children.push(child);
    return this;
  }

  remove(){
    if (!this.parent) return;
    let children = this.parent.children;
    for (let i = 0; i< children.length; i++) {
      if(children[i] === this) {
        children.splice(i, 1);
        return;
      }
    }
  }

  show() {
    console.log(`文件夹: ${ this.name }`);
    for (let i =0; i< this.children.length; i++){
      this.children[i].show();
    }
  }
}

class File {
  constructor(name) {
    this.name = name;
  }

  add(child) {
    throw new Error("文件下不能再添加文件或文件夹了");
  }

  remove(){
    if (!this.parent) return;
    let children = this.parent.children;
    for (let i = 0; i< children.length; i++) {
      if(children[i] === this) {
        children.spilce(i, 1);
        return;
      }
    }
  }

  show() {
    console.log(`文件: ${ this.name }`);
  }
}

let video = new Folder("video");
let react = new Folder("react");
let vue = new Folder("vue");

let reactjs = new File("reactjs");
let vuejs = new File("vuejs");

video.add(react);
video.add(vue);
react.add(reactjs);
vue.add(vuejs);
video.show();

console.log("====================Remove react folder & reactjs========================")

react.remove();
video.show();
