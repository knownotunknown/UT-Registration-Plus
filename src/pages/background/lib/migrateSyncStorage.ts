// import { CourseCatalogScraper } from '@views/lib/CourseCatalogScraper';
// import getCourseTableRows from '@views/lib/getCourseTableRows';

// import addCourse from './addCourse';
// import createSchedule from './createSchedule';

// type OldCourseTime = [string, [string, string], string];
// //                    day, [start in military time, end in military time], location
// //                eg. ['M', ['14:00', '15:00'], 'IC2 3.128']
  
// type OldCourse = {
//     coursename: string;
//     datetimearr: OldCourseTime;
//     link: string;
//     profname: string;
//     status: 'cancelled' | 'closed' | 'open';
//     unique: string; // Only need unique for migration
// }
  
// type CourseSchedule = OldCourse[];

// function main() {
//     const oldCourses = getOldCourses();
//     const newCourses = migrateCourses(oldCourses);
//     saveCourses(newCourses);
// }

// async function getOldCourses(): Promise<CourseSchedule> {

// }

// function fetchHTML(url) {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok, status: ${response.status}`);
//         }
//         return response.text(); 
//       })
//       .then(html => {
//         console.log(html); 
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }


// async function scrapeCoursesFromHTML(htmlString) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, 'text/html');
//     const tableRows = getCourseTableRows(doc);
//     const ccs = new CourseCatalogScraper('COURSE_CATALOG_LIST');
//     const scrapedRows = ccs.scrape(tableRows, true);
//     const scrapedCourseIds = scrapedRows.map(row => row.course.uniqueId);
//     return scrapedCourseIds;
// }

