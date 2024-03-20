$(document).ready(function(){
  var first_array = [11,32,43,45,57];
  var second_array = [43,55,66,57];

  var merge_array = first_array.concat(second_array);
  var duplicate = [];

  merge_array.forEach((element , index) => {
    if(merge_array.indexOf(element) !== index){
      duplicate.push(element);
    }
  });
  console.log(duplicate);
  $("#duplicateArray").text("Duplicate array is : " + duplicate );
});
