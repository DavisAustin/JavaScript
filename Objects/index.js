var course = new Object();

// course.title = "JavaScript Essential Training";
// course.instructor = "Morten Rand-Hendriksen";
// course.level = "Beginner";
// course.published = true;
// course.views = 0;

// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: "Beginner",
//     published: true,
//     views: 0,
//     updatedViews: function() {
//         return ++course.views;
//     }
// }


// var currentDate = new Date();

function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updatedViews = function () {
       return ++this.views;
    };
}

var courses = [
    course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendricksen", 1, true, 0),
    course02 = new Course("Up and Running with ECMA Script 6", "Eve Porcello", 2, true, 6)
];

console.log(courses[1]);