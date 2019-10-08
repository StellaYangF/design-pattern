/**
 * LRU chache: Least Recently Used cache
 * 用一个数组来存储数据，给每一个数据项标记一个访问时间戳
 * 每次插入新数据项的时候，先把数组中存在的数据项的时间戳自增,并将新数据项的时间戳置为0并插入到数组中
 * 每次访问数组中的数据项的时候，将被访问的数据项的时间戳置为0。
 * 当数组空间已满时，将时间戳最大的数据项淘汰。
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.members = []
  }

  put(key, value) {
    let oldestAge = -1;
    let oldestIndex = -1;
    let found = false;
    for (let i = 0; i<this.members.length; i++) {
      let member = this.members[i];
      if (member.age > oldestAge) {
        oldestAge = member.age;
        oldestIndex = i;
      }
      if (member.key == key) {
        found = true;
        this.members[i] = { key, value, age: 0};
      }else {
        member.age ++;
      }
    }
    if (!found) {
      if (this.members.length >= this.capacity) {
        this.members.splice(oldestIndex, 1);
      }
      this.members.push({ key, value, age: 0});
    }
  }

  get (key) {
    let found = false;
    let curIndex = -1;
    let filteredMember = [];
    let arr = [];
    let num = 1;
    for (let i = 0; i< this.members.length; i++) {
      let member = this.members[i];
      if (member.key == key) {
        member.age = 0;
        curIndex = i;
        found = true;
      } else {
        filteredMember.push({index: i, age: member.age})
      }
    }
    filteredMember.forEach(member => {
      arr[member.age] = member;
    })
    for (let member of arr) {
      member ? this.members[member.index].age = num ++ : ""; // 排除下标对应的空元素
    }
    return found ? this.members[curIndex].value : -1;
  }
}

let cache = new LRUCache(4);
cache.put(1, {name: "Linda", gender: "female"});
cache.put(2, {name: "Eva", gender: "female"});
cache.put(3, {name: "Tom", gender: "male"});
cache.put(4, {name: "Jerry", gender: "male"});
cache.put(5, {name: "Richard", gender: "male"});
cache.get(1);
cache.get(2);
cache.get(5);
cache.get(4);
cache.get(3);

console.log(cache.members);