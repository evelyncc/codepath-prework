var subtract = function(head){
  var pointer = head;
  var size = 0;

  while (pointer.next) {
    size += 1;
    pointer = pointer.next;
  }

  var midpoint = size/2;
  var pointer2 = head;
  for (var i = 0; i < midpoint; i++) {
    pointer2 = pointer2.next;
  }
  
  var prev = null;
  while (pointer2 !== null) {
    var temp = pointer2.next;
    pointer2.next = prev;
    prev = pointer2;
    pointer2 = temp;
  }

  pointer2 = prev;
  prev = null;
  pointer = head;
  if (size % 2 === 0) {
    midpoint += 1;
  }
  for (var i = 0; i < midpoint; i++) {
    pointer.data = pointer2.data - pointer.data;
    pointer = pointer.next;
    var temp = pointer2.next;
    pointer2.next = prev;
    prev = pointer2;
    pointer2 = temp;
  }
  pointer.next = prev;

  return head;
}