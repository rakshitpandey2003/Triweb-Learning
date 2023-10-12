const marksOfStundent = [40,98,89,65,34,78,56,78,99,87];
[subject1Marks,subject2Marks, subject3Marks,subject4Marks,subject5Marks, ...otherMarks] = marksOfStundent;
console.log("subject1Marks",subject1Marks);
console.log("subject2Marks",subject2Marks);
console.log("subject3Marks",subject3Marks);
console.log("subject4Marks",subject4Marks);
console.log("subject5Marks",subject5Marks);
console.log("Other activity marks",otherMarks);
const student = {
    'uname': "Rakshit",
    'mobile': 99355,
    'address': "India"
};
const {uname, mobile} = student;
console.log(uname," and mobile = ",mobile);