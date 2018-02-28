class Sorter {
  constructor() {
    this.comparator = (a,b) => a-b;
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var indices_arr = indices.sort((a,b) => a-b);
    var start_index = indices_arr[0];
    var array_length = indices_arr.length;
    var sort_array = this.arr.splice(start_index, array_length);
    sort_array.sort(this.comparator);
    for (var i = sort_array.length -1 ; i >=0; i--) {
      this.arr.splice(start_index, 0, sort_array[i]);
    }
  }

  setComparator(compareFunction) {
    this.comparator = (compareFunction);
  }
}

module.exports = Sorter;