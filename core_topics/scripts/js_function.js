var obj={}
obj.addHeading = function(element,headingText){
    element.innerHTML = headingText;
   
}

//passing both the parameters
obj.addHeading(document.getElementById("heading1"),"Rushali");

//passing only one parameter
obj.addHeading(document.getElementById("heading1"),"Rushali");

obj.createList = function(list){
    for(let i=0;i<list.length;i++){
        console.log(list[i])
    }
    console.log(i) //reference error
}

obj.createList1 = function(list){
    for(var i=0;i<list.length;i++){
        console.log(list[i])
    }
    console.log(i) //value of i will be continuing
}

list = ['Jamhsedpur','Ranchi','Bhubaneshwar']
obj.createList(list)

//using rest param
obj.createListwithResponseParam = function(...params){
    params.forEach((value,idx) =>{
        console.log(value)
    })
}
obj.createListwithResponseParam('Rushali','Shruti')



//use spread
obj.createListWithSpread = function(city1,city2,city3){
    console.log(city1+city2+city3)
}
obj.createListWithSpread(...list)

//destructure 
let [loc1,loc2,loc3] = list

obj.createListwithResponseParam(loc1,loc2,loc3)


//map function
obj.usingMapFunction = function(marklist) {
    // Use map to add 10 to each element in the array
    let updatedList = marklist.map((value) => {
        return value + 10;
    });
    
    // Log the updated list
    console.log(updatedList);
};

// Call the method
obj.usingMapFunction([10, 20, 30, 40]);


//return an array of list item
obj.usingMapCreateFunction = function(list){
    let items= list.map((value,idx)=>{
        return "<li>" +value + "</li>";

    })
    return items;
}

obj.createBulletList = function(parentElementId, listItem){
    //iterate through list itrms
    //append to parentelement
    listItem.forEach((eachItem,idx) =>{
        parentElementId.appendChild()
    })
}

const res=obj.usingMapCreateFunction(['dog','lion']);

obj.createBulletList(document.querySelector(".list-item"))


