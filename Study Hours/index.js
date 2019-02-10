// Study Time
// In the Bootcamp out of each week you spend 7 hours for 4 days and 3 hours for one day attending the classes. Compute the total number of hours you attend per one week and save it to a variable classHours. Make this variable a constant.
// Let's say that every week you spend another 30% of the weekly class hours by self studying. Compute the total number of weekly study hours and save it into a variable studyHours.
// Compute the total number of study hours throughout the whole Bootcamp assuming that all 12 weeks have the same sum of study hours. Save the result in a variable called totalStudyTime.
// Create a string that could eventually by displayed somewhere on the Bootcamp's website saying something like:

// Total study time: 400 hours

// Put the content of the totalStudyTime variable as the correct value inside the string. Save it in a variable studyMessage.

const bootDay = 7;
const bootHalfDay = 3;

function bootWeek() {
    return ((bootDay *4) + bootHalfDay);

}
const classHours = bootWeek();

function selfStudy() {
    return (classHours * 0.70);
}

const myStudyTime = selfStudy();

const totalStudy = () => {
    return (myStudyTime + classHours) *12;
};

const totalHours = totalStudy();

function tellmeHowMuchIstudy() {
    alert ("I study " + classHours + " hours a week, which makes a total of " + totalHours + " during the whole Bootcamp");
}

tellmeHowMuchIstudy();