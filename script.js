let student1 = [
    {iD: 0, name:"მახო" , gpa:2.3},
    {iD: 1, name:"ნიკუშა" , gpa:2.7},
    {iD: 2, name:"გიორგი" , gpa:1.6},
    {iD: 3, name:"ნინი" , gpa:3.2},
    {iD: 4, name:"ნინა" , gpa:3.5},
    {iD: 5, name:"ქეთი" , gpa: 3.9},
    {iD: 6, name:"რომეო" , gpa:3.4},
    {iD: 7, name:"დათო" , gpa:3.3},
    {iD: 8, name:"ალიკა" , gpa:3.3}
];

let student = [
    {iD: 9, name:"მირინა" , gpa:2.7},
    {iD: 10, name:"მიმი" , gpa:3.7},
    {iD: 11, name:"ნანუკა" , gpa:2.6},
    {iD: 12, name:"მიშა" , gpa:2.2},
    {iD: 13, name:"გოჩა" , gpa:3.6},
    {iD: 14, name:"ჯესი " , gpa: 4.0},
    {iD: 15, name:"ნატო" , gpa:3.6},
    {iD: 16, name:"დემური" , gpa:3.2},
    {iD: 17, name:"სალომე" , gpa:3.4}
];

function higherGpa (firstBase , secondBase){

    let result = [];

    for(let i=0 ; i<firstBase.length;i++){
        result.push(firstBase[i].gpa);
    }
    for(let i=0 ; i<secondBase.length;i++){
        result.push(secondBase[i].gpa);
    }
    result.sort();
    let j = result.length-1;

    let highGPA = [];
    for(let i = 0;i<5;i++){
        highGPA.push(result[j]);
        j--;
    }
    alert(highGPA);
}

higherGpa(student,student1);
